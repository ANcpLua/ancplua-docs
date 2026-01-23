# Utilities Documentation

@import ../CLAUDE.md

## Section Context

This section documents **ANcpLua.Roslyn.Utilities** - a standalone NuGet package for Roslyn development.

### Key Principles

- This is a STANDALONE package (Layer 0) - installation instructions ARE appropriate here
- Cannot depend on ANcpLua.NET.Sdk (circular dependency)
- Targets netstandard2.0 for analyzer/generator compatibility
- Uses PolySharp for polyfills instead of SDK polyfills

### Package Structure

| Package                          | Target         | Purpose           |
| -------------------------------- | -------------- | ----------------- |
| ANcpLua.Roslyn.Utilities         | netstandard2.0 | Core library      |
| ANcpLua.Roslyn.Utilities.Testing | net10.0        | Generator testing |

### Key APIs

| Category         | APIs                                         |
| ---------------- | -------------------------------------------- |
| Flow Control     | `DiagnosticFlow<T>`, `ReportAndContinue()`   |
| Pattern Matching | `Match.*` (symbols), `Invoke.*` (operations) |
| Validation       | `SemanticGuard<T>`                           |
| Domain Contexts  | `AwaitableContext`, `AspNetContext`          |
| Code Generation  | `IndentedStringBuilder`                      |
| Pipeline         | `GroupBy()`, `Batch()`, `Distinct()`         |

### Page Structure

Each API page should show:

1. What it does (one sentence)
2. Code example showing usage
3. API reference table if applicable

### External Reference

Full documentation: https://ancplua.io/utilities/overview
