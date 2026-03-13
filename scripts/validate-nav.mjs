import { readFileSync, existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");

// ---------------------------------------------------------------------------
// 1. Parse docs.json and extract every page reference from navigation
// ---------------------------------------------------------------------------

const docsJson = JSON.parse(readFileSync(join(ROOT, "docs.json"), "utf8"));

function extractPages(items) {
  const pages = [];
  for (const item of items) {
    if (typeof item === "string") {
      pages.push(item);
    } else if (item && typeof item === "object") {
      // Nested group: { group: "...", pages: [...] }
      if (Array.isArray(item.pages)) {
        pages.push(...extractPages(item.pages));
      }
      // Tab-level: { tab: "...", groups: [...] }
      if (Array.isArray(item.groups)) {
        for (const group of item.groups) {
          if (Array.isArray(group.pages)) {
            pages.push(...extractPages(group.pages));
          }
        }
      }
    }
  }
  return pages;
}

const tabs = docsJson.navigation?.tabs ?? [];
const navPages = new Set(extractPages(tabs));

// ---------------------------------------------------------------------------
// 2. Load .mintignore patterns (simple glob: * and ** only)
// ---------------------------------------------------------------------------

const mintignorePath = join(ROOT, ".mintignore");
const ignorePatterns = [];
if (existsSync(mintignorePath)) {
  const lines = readFileSync(mintignorePath, "utf8").split("\n");
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    // Convert simple globs to RegExp
    const escaped = line
      .replace(/[.+^${}()|[\]\\]/g, "\\$&")
      .replace(/\*\*/g, "<<GLOBSTAR>>")
      .replace(/\*/g, "[^/]*")
      .replace(/<<GLOBSTAR>>/g, ".*");
    ignorePatterns.push(new RegExp(`^${escaped}$`));
  }
}

function isIgnored(relPath) {
  return ignorePatterns.some((re) => re.test(relPath));
}

// ---------------------------------------------------------------------------
// 3. Discover all .mdx files on disk
// ---------------------------------------------------------------------------

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip hidden dirs, node_modules, snippets, .github
      if (
        entry.name.startsWith(".") ||
        entry.name === "node_modules" ||
        entry.name === "snippets" ||
        entry.name === "scripts"
      ) {
        continue;
      }
      files.push(...(await walk(full)));
    } else if (entry.name.endsWith(".mdx")) {
      files.push(full);
    }
  }
  return files;
}

const allMdx = await walk(ROOT);

// Build a set of page slugs from disk (path relative to ROOT, without .mdx)
const diskPages = new Set(
  allMdx
    .map((f) => relative(ROOT, f).replace(/\.mdx$/, ""))
    .filter((p) => !isIgnored(p) && !isIgnored(p + ".mdx")),
);

// ---------------------------------------------------------------------------
// 4. Compare: missing files & orphan files
// ---------------------------------------------------------------------------

const missing = []; // in nav but no file on disk
const orphans = []; // on disk but not in nav

for (const page of navPages) {
  const filePath = join(ROOT, `${page}.mdx`);
  if (!existsSync(filePath)) {
    missing.push(page);
  }
}

for (const page of diskPages) {
  if (!navPages.has(page)) {
    orphans.push(page);
  }
}

// ---------------------------------------------------------------------------
// 5. Report
// ---------------------------------------------------------------------------

let exitCode = 0;

if (missing.length > 0) {
  console.error(`\n  MISSING FILES (referenced in docs.json but not on disk):\n`);
  for (const p of missing.sort()) {
    console.error(`    ${p}.mdx`);
  }
  exitCode = 1;
}

if (orphans.length > 0) {
  console.warn(`\n  ORPHAN FILES (on disk but not in docs.json navigation):\n`);
  for (const p of orphans.sort()) {
    console.warn(`    ${p}.mdx`);
  }
  // Orphans are warnings, not failures
}

if (missing.length === 0 && orphans.length === 0) {
  console.log("  Navigation sync OK: all pages match.");
}

console.log(
  `\n  Summary: ${navPages.size} nav entries, ${diskPages.size} files on disk, ${missing.length} missing, ${orphans.length} orphans\n`,
);

process.exit(exitCode);
