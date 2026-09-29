# Matrix Audit

## Windows + Node 18

- OS / Node: Windows-latest / Node 18
- Step: `npm test`
- Exact error line: `Expected: "D:\\matrix-debug-drill\\src\\output\\report.txt" Received: "D:/matrix-debug-drill/src/output/report.txt"`
- Failure type: OS-specific
- Fix to apply: Replace hardcoded path concatenation with `path.join()` and normalize line endings before comparing file contents.

## Windows + Node 20

- OS / Node: Windows-latest / Node 20
- Step: `npm test`
- Exact error line: `Expected: "D:\\matrix-debug-drill\\src\\output\\report.txt" Received: "D:/matrix-debug-drill/src/output/report.txt"`
- Failure type: OS-specific
- Fix to apply: Use `path.join()` for all output path generation and normalize CRLF to LF in file-reading assertions.

## Windows + Node 22

- OS / Node: Windows-latest / Node 22
- Step: `npm test`
- Exact error line: `Expected: "D:\\matrix-debug-drill\\src\\output\\report.txt" Received: "D:/matrix-debug-drill/src/output/report.txt"`
- Failure type: OS-specific
- Fix to apply: Keep path generation OS-aware via `path.join()` and normalize text from `readFileSync()` before asserting against expected newline content.

## Ubuntu + Node 22

- OS / Node: ubuntu-latest / Node 22
- Step: `npm test`
- Exact error line: `TypeError: crypto.createCipher is not a function`
- Failure type: runtime version
- Fix to apply: Replace deprecated `createCipher()` / `createDecipher()` with `createCipheriv()` / `createDecipheriv()`, using a stable IV and key derivation strategy.

## Root cause summary

The failing pattern was consistent with two distinct categories:

1. Windows failures were OS-specific path and newline issues caused by forward-slash literals and CRLF differences in a Linux-developed test environment.
2. Ubuntu + Node 22 was a runtime compatibility break caused by the removal of legacy crypto APIs in modern Node releases.

The correct remediation is to fix those root causes rather than excluding the failing matrix entries from the workflow.
