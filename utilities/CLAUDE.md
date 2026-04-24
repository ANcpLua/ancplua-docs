# Utilities Documentation

@import ../CLAUDE.md

## Section Context

This section documents **ANcpLua.Roslyn.Utilities** - a standalone NuGet package for Roslyn development.

### Key Principles

- This is a STANDALONE package (Layer 0) - installation instructions ARE appropriate here
- Cannot depend on ANcpLua.NET.Sdk (circular dependency)
- Targets netstandard2.0 for analyzer/generator compatibility
- Ships its own polyfill package (`ANcpLua.Roslyn.Utilities.Polyfills`) — SDK explicitly bans PolySharp

### Package Structure

| Package                              | Target         | Purpose                                       |
| ------------------------------------ | -------------- | --------------------------------------------- |
| ANcpLua.Roslyn.Utilities             | netstandard2.0 | Runtime + Roslyn helpers (ordinary reference) |
| ANcpLua.Roslyn.Utilities.Sources     | source-only    | Source-embedded copy for source generators    |
| ANcpLua.Roslyn.Utilities.Polyfills   | source-only    | netstandard2.0 polyfills (init / required / Index / Range / TimeProvider / Lock) |
| ANcpLua.Roslyn.Utilities.Testing     | net10.0        | Generator / analyzer / codefix / MSBuild / web test infrastructure |
| ANcpLua.Roslyn.Utilities.Testing.Aot | netstandard2.0 | AOT / trim test attributes + MSBuild orchestration |

### Key APIs

| Category         | APIs                                                               |
| ---------------- | ------------------------------------------------------------------ |
| Pipeline state   | `EquatableArray<T>`, `DiagnosticFlow<T>`, `ResultWithDiagnostics<T>` |
| Pattern Matching | `Match.*` (symbols), `Invoke.*` (operations)                       |
| Validation       | `SemanticGuard`                                                    |
| Semconv          | `DeprecatedOtelAttributes` (v1.40), `SemconvVersion`               |
| Code Generation  | `IndentedStringBuilder`, `GeneratedCodeHelpers`, `ValueStringBuilder` |
| Pipeline ops     | `CollectAsEquatableArray`, `ReportAndStop`, `GroupBy`, `Batch`, `Distinct`, `AddSources` |

Agent test doubles, MAF conformance, and workflow fixtures live in the sibling `ANcpLua.Agents.Testing` + `ANcpLua.Agents.Testing.Workflows` packages — not here.

### Page Structure

Each API page should show:

1. What it does (one sentence)
2. Code example showing usage
3. API reference table if applicable

### External Reference

Full documentation: https://ancplua.io/utilities/overview
