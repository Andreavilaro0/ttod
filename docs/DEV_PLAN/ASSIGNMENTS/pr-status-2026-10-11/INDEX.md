# PR status pack — 2026-10-11

Instructor-only archive. Not under `docs/public/`.

## Layout

| Path | Contents |
| --- | --- |
| [`status/`](./status/) | Student-facing status + sync note (formal reject/HOLD) |
| [`triage/`](./triage/) | Prior triage + HOLD clarifications |
| [`bot/`](./bot/) | Automated reviews |
| [`formal-reviews/`](./formal-reviews/) | Latest formal REQUEST CHANGES bodies (or HOLD stub) |



## Branch hygiene (workflow scope fixed)

`gh auth refresh -s workflow` completed. Instructor then:

| PR | Action |
| --- | --- |
| #63 #64 #73 #59 | `gh pr update-branch` OK |
| #60 | DIRTY resolved locally (ci.yml + package.json); pushed to fork `PRNovoa/Team-4-PWA-Local-Operations` |

## HOLD skim result (2026-10-11 evening)

| PR | Decision | Merge blocked until |
| --- | --- | --- |
| #63 | **APPROVED** | Content #61 → #62 merged; instructor Update branch (UI) |
| #64 | **APPROVED** | #61 → #62 → #63; instructor Update branch (UI) |
| #73 | **APPROVED** | Accounts #53 → #58 → #57 → #72 → #56; Update branch (UI) |
| #59 | **APPROVED** | … → #73; Update branch (UI); tip edits `ci.yml` |
| #60 | **APPROVED** | PWA #46 → #47 → #49 → #50; **instructor resolves DIRTY** |

`gh pr update-branch` failed here: OAuth app lacks `workflow` scope when the update would touch `.github/workflows/ci.yml`. Use the GitHub **Update branch** button while logged in as a user with workflow permission.

## Policy (synced)

- **24 PRs:** formal `CHANGES_REQUESTED` for **code/verify only** — not BEHIND.
- **5 HOLD:** #59 #60 #63 #64 #73 — `REVIEW_REQUIRED`, not rejected; instructor updates branch / resolves DIRTY.
- **0 APPROVED.**

## Per-PR index

| PR | Author | Branch | Merge | Decision | Status | Triage | Bot | Formal |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | --- |
| [#38](https://github.com/ruvebal/ttod/pull/38) | @Andreavilaro0 | `oracle-task3-grounded-creative-disclosure` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/38.md) | 2 [t](./triage/38.md) | 1 [b](./bot/38.md) | [f](./formal-reviews/38.md) |
| [#39](https://github.com/ruvebal/ttod/pull/39) | @Andreavilaro0 | `oracle-task4-session-history` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/39.md) | 2 [t](./triage/39.md) | 1 [b](./bot/39.md) | [f](./formal-reviews/39.md) |
| [#40](https://github.com/ruvebal/ttod/pull/40) | @Andreavilaro0 | `oracle-task5-preparing-state` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/40.md) | 2 [t](./triage/40.md) | 1 [b](./bot/40.md) | [f](./formal-reviews/40.md) |
| [#41](https://github.com/ruvebal/ttod/pull/41) | @Andreavilaro0 | `oracle-task6-recovery-error-state` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/41.md) | 2 [t](./triage/41.md) | 1 [b](./bot/41.md) | [f](./formal-reviews/41.md) |
| [#44](https://github.com/ruvebal/ttod/pull/44) | @Andreavilaro0 | `oracle-task1-streamed-response-rendering` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/44.md) | 2 [t](./triage/44.md) | 1 [b](./bot/44.md) | [f](./formal-reviews/44.md) |
| [#45](https://github.com/ruvebal/ttod/pull/45) | @Andreavilaro0 | `oracle-task2-live-region-announcement` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/45.md) | 2 [t](./triage/45.md) | 1 [b](./bot/45.md) | [f](./formal-reviews/45.md) |
| [#46](https://github.com/ruvebal/ttod/pull/46) | @PRNovoa | `pwa-task2-offline-oracle` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/46.md) | 2 [t](./triage/46.md) | 1 [b](./bot/46.md) | [f](./formal-reviews/46.md) |
| [#47](https://github.com/ruvebal/ttod/pull/47) | @PRNovoa | `pwa-task3-cache-policies` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/47.md) | 2 [t](./triage/47.md) | 1 [b](./bot/47.md) | [f](./formal-reviews/47.md) |
| [#49](https://github.com/ruvebal/ttod/pull/49) | @PRNovoa | `pwa-task4-offline-queue` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/49.md) | 2 [t](./triage/49.md) | 1 [b](./bot/49.md) | [f](./formal-reviews/49.md) |
| [#50](https://github.com/ruvebal/ttod/pull/50) | @PRNovoa | `pwa-task5-install-quality` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/50.md) | 2 [t](./triage/50.md) | 1 [b](./bot/50.md) | [f](./formal-reviews/50.md) |
| [#52](https://github.com/ruvebal/ttod/pull/52) | @gpfc-git | `graph-task2-accessible-node-selection` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/52.md) | 1 [t](./triage/52.md) | 1 [b](./bot/52.md) | [f](./formal-reviews/52.md) |
| [#53](https://github.com/ruvebal/ttod/pull/53) | @alexxblaro16 | `accounts-task1-ssr-auth` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/53.md) | 1 [t](./triage/53.md) | 1 [b](./bot/53.md) | [f](./formal-reviews/53.md) |
| [#55](https://github.com/ruvebal/ttod/pull/55) | @gpfc-git | `graph-task3-task-filter-interaction` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/55.md) | 1 [t](./triage/55.md) | 1 [b](./bot/55.md) | [f](./formal-reviews/55.md) |
| [#56](https://github.com/ruvebal/ttod/pull/56) | @alexxblaro16 | `accounts-task5-public-pat` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/56.md) | 1 [t](./triage/56.md) | 1 [b](./bot/56.md) | [f](./formal-reviews/56.md) |
| [#57](https://github.com/ruvebal/ttod/pull/57) | @alexxblaro16 | `accounts-task3-proposal-endpoint` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/57.md) | 1 [t](./triage/57.md) | 1 [b](./bot/57.md) | [f](./formal-reviews/57.md) |
| [#58](https://github.com/ruvebal/ttod/pull/58) | @Gonsiii11 | `accounts-task2-personal-library` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/58.md) | 1 [t](./triage/58.md) | 1 [b](./bot/58.md) | [f](./formal-reviews/58.md) |
| [#59](https://github.com/ruvebal/ttod/pull/59) | @alexxblaro16 | `accounts-task7-auth-library-api-tests` | `BEHIND` | `REVIEW_REQUIRED` (HOLD) | [s](./status/59.md) | 2 [t](./triage/59.md) | 1 [b](./bot/59.md) | [f](./formal-reviews/59.md) |
| [#60](https://github.com/ruvebal/ttod/pull/60) | @PRNovoa | `pwa-task6-performance` | `DIRTY` | `REVIEW_REQUIRED` (HOLD) | [s](./status/60.md) | 2 [t](./triage/60.md) | 1 [b](./bot/60.md) | [f](./formal-reviews/60.md) |
| [#61](https://github.com/ruvebal/ttod/pull/61) | @gontugithub | `content-task1-facet-routes` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/61.md) | 1 [t](./triage/61.md) | 1 [b](./bot/61.md) | [f](./formal-reviews/61.md) |
| [#62](https://github.com/ruvebal/ttod/pull/62) | @gontugithub | `content-task2-breadcrumbs` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/62.md) | 1 [t](./triage/62.md) | 1 [b](./bot/62.md) | [f](./formal-reviews/62.md) |
| [#63](https://github.com/ruvebal/ttod/pull/63) | @gontugithub | `content-task3-empty-error-states` | `BEHIND` | `REVIEW_REQUIRED` (HOLD) | [s](./status/63.md) | 2 [t](./triage/63.md) | 1 [b](./bot/63.md) | [f](./formal-reviews/63.md) |
| [#64](https://github.com/ruvebal/ttod/pull/64) | @gontugithub | `content-task4-propose-form` | `BEHIND` | `REVIEW_REQUIRED` (HOLD) | [s](./status/64.md) | 2 [t](./triage/64.md) | 1 [b](./bot/64.md) | [f](./formal-reviews/64.md) |
| [#65](https://github.com/ruvebal/ttod/pull/65) | @gontugithub | `content-task5-provenance` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/65.md) | 1 [t](./triage/65.md) | 1 [b](./bot/65.md) | [f](./formal-reviews/65.md) |
| [#67](https://github.com/ruvebal/ttod/pull/67) | @gontugithub | `content-task6-content-tests` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/67.md) | 1 [t](./triage/67.md) | 1 [b](./bot/67.md) | [f](./formal-reviews/67.md) |
| [#68](https://github.com/ruvebal/ttod/pull/68) | @gontugithub | `content-task9-design-decision` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/68.md) | 1 [t](./triage/68.md) | 1 [b](./bot/68.md) | [f](./formal-reviews/68.md) |
| [#69](https://github.com/ruvebal/ttod/pull/69) | @PRNovoa | `pwa-task7-offline-tests` | `DIRTY` | `CHANGES_REQUESTED` (AMEND) | [s](./status/69.md) | 1 [t](./triage/69.md) | 1 [b](./bot/69.md) | [f](./formal-reviews/69.md) |
| [#71](https://github.com/ruvebal/ttod/pull/71) | @gpfc-git | `graph-task4-url-state-selection` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/71.md) | 1 [t](./triage/71.md) | 1 [b](./bot/71.md) | [f](./formal-reviews/71.md) |
| [#72](https://github.com/ruvebal/ttod/pull/72) | @alexxblaro16 | `accounts-task4-review-pipeline` | `BEHIND` | `CHANGES_REQUESTED` (AMEND) | [s](./status/72.md) | 1 [t](./triage/72.md) | 1 [b](./bot/72.md) | [f](./formal-reviews/72.md) |
| [#73](https://github.com/ruvebal/ttod/pull/73) | @alexxblaro16 | `accounts-task6-api-guide` | `BEHIND` | `REVIEW_REQUIRED` (HOLD) | [s](./status/73.md) | 2 [t](./triage/73.md) | 1 [b](./bot/73.md) | [f](./formal-reviews/73.md) |

_Synced: 2026-10-11 17:46_
