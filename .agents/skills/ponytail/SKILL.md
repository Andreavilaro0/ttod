---
name: ponytail
description: >-
  Lazy senior-dev review lens: prefer the smallest complete change, reuse
  existing helpers, no unasked abstractions. Use when reviewing PRs for
  over-engineering, or when implementing with minimal diff discipline.
---

# Ponytail — lazy senior dev mode

Canonical rule (always-on Cursor landing): [`~/src/.cursor/rules/ponytail.mdc`](../../rules/ponytail.mdc)
Upstream: https://github.com/DietrichGebert/ponytail (`.cursor/rules/ponytail.mdc`)

## When reviewing a PR

Score the diff against ponytail:

1. **Needed?** Flag features/options nobody asked for.
2. **Reuse?** Prefer existing helpers/patterns in the repo.
3. **Stdlib/platform first** — no new dependency for a few lines.
4. **Shortest working diff** — deletion beats addition; no “for later” wrappers.
5. **Finish the change** — callers, tests, fixtures the change breaks must be updated.
6. **Never cut** validation at trust boundaries, error handling that prevents data loss, security, a11y, or what the user asked for.

End the ponytail section with 1–2 lines: what you skipped / did not check, and residual risk.
