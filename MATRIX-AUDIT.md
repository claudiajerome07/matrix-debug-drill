# Matrix Audit

## Windows + Node 18

**Failure Type:** OS-specific

**Issue:** Hardcoded path separators and line-ending differences.

**Fix:** Replaced string path concatenation with `path.join()` and normalized line endings before assertions.

---

## Windows + Node 20

**Failure Type:** OS-specific

**Issue:** Hardcoded path separators and line-ending differences.

**Fix:** Replaced string path concatenation with `path.join()` and normalized line endings.

---

## Windows + Node 22

**Failure Type:** OS-specific

**Issue:** Hardcoded path separators and line-ending differences.

**Fix:** Used `path.join()` and normalized line endings.

---

## Ubuntu + Node 22

**Failure Type:** Runtime Version

**Issue:** Deprecated crypto APIs (`createCipher` and `createDecipher`) are removed.

**Fix:** Replaced them with `createCipheriv()` and `createDecipheriv()`.