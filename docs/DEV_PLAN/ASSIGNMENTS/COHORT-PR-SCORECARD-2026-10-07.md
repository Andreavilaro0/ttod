# Cohort PR scorecard — updated 2026-10-13 (evening)

**Audience:** instructor only (not published under `docs/public/`).
**Rubric:** §5 — C25 · A25 · T20 · X10 · CI10 · P10 = 100.
**Evidence pack:** [`pr-status-2026-10-11/`](./pr-status-2026-10-11/INDEX.md) (archive; live gates below).

**Snapshot:** 6 student PRs open (+ maintainer #9).  
**Complete seams:** PWA · Accounts · **Oracle** (Tasks 1–7 via cumulative **#42**; leftover per-task PRs closed 2026-10-13).  
**Post-seam:** PWA **#74** AI-use memo merged 2026-10-13.  
**Still open:** Content #65 → #67 → #68 · Graph #52 → #55 → #71.

---

## Group → seam map (current)

| Group | Seam | Authors | Open stack |
| --- | --- | --- | --- |
| E1 | Content | `gontugithub` | #61✓→#62✓→#63✓→#64✓→**#65**→**#67**→**#68** (#43 merged) |
| E2 | Graph | `gpfc-git` | #52→#55→#71 (#48 merged) |
| E3 | Oracle | `Andreavilaro0` / fork `nbfrodri/ttod_team3` | **complete** — #42 cumulative; #44/#45/#38–#41 closed superseded |
| E4 | PWA | `PRNovoa` | **complete** (+ #74 AI-use memo) |
| E5 | Accounts | `alexxblaro16` / `Gonsiii11` on #58 | **complete** |

✓ = already **MERGED**.

---

## Per-PR matrix

| Group | PR | Task / branch | C/25 | A/25 | T/20 | X/10 | CI/10 | P/10 | Σ/100 | Triage / notes | Live CI · merge · decision |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| E1 | [#43](https://github.com/ruvebal/ttod/pull/43) **MERGED** 2026-10-08 | docs-plan-bugbot · `docs/group-1-plan-amendments` | 22 | 24 | 20 | 10 | 10 | 3 | **89** | MERGED; empty AI log; docs amend | — |
| E1 | [#61](https://github.com/ruvebal/ttod/pull/61) **MERGED** 2026-10-12 | content-task1 · `content-task1-facet-routes` | 24 | 24 | 20 | 10 | 10 | 8 | **96** | MERGED; sibling facets; empty-tag 404 | — |
| E1 | [#62](https://github.com/ruvebal/ttod/pull/62) **MERGED** 2026-10-12 | content-task2 · `content-task2-breadcrumbs` | 24 | 25 | 20 | 10 | 10 | 9 | **98** | MERGED; Breadcrumbs + copy.notFound | — |
| E1 | [#63](https://github.com/ruvebal/ttod/pull/63) **MERGED** 2026-10-11 | content-task3 · `content-task3-empty-error-states` | 25 | 25 | 20 | 9 | 10 | 9 | **98** | MERGED; EmptyState+loadWisdom+tests | — |
| E1 | [#64](https://github.com/ruvebal/ttod/pull/64) **MERGED** 2026-10-11 | content-task4 · `content-task4-propose-form` | 25 | 25 | 20 | 10 | 10 | 9 | **99** | MERGED; propose form a11y+gate | — |
| E1 | [#65](https://github.com/ruvebal/ttod/pull/65) **CHANGES_REQUESTED** | content-task5 · `content-task5-provenance` | — | — | — | — | — | — | — | AMEND: provenance on all surfaces | `CHANGES_REQUESTED` |
| E1 | [#67](https://github.com/ruvebal/ttod/pull/67) **CHANGES_REQUESTED** | content-task6 · `content-task6-content-tests` | — | — | — | — | — | — | — | AMEND: propose-form component test | `CHANGES_REQUESTED` |
| E1 | [#68](https://github.com/ruvebal/ttod/pull/68) **CHANGES_REQUESTED** | content-task9 · `content-task9-design-decision` | — | — | — | — | — | — | — | AMEND: design-decision tip alignment | `CHANGES_REQUESTED` |
| E2 | [#48](https://github.com/ruvebal/ttod/pull/48) **MERGED** 2026-10-08 | graph-task1 · `graph-task1-fetch-from-api` | 25 | 24 | 20 | 10 | 10 | 9 | **98** | MERGED | — |
| E2 | [#52](https://github.com/ruvebal/ttod/pull/52) **CHANGES_REQUESTED** | graph-task2 · `graph-task2-accessible-node-selection` | — | — | — | — | — | — | — | AMEND: keyboard focus navigation | `CHANGES_REQUESTED` |
| E2 | [#55](https://github.com/ruvebal/ttod/pull/55) **CHANGES_REQUESTED** | graph-task3 · `graph-task3-task-filter-interaction` | — | — | — | — | — | — | — | AMEND: selection across filter | `CHANGES_REQUESTED` |
| E2 | [#71](https://github.com/ruvebal/ttod/pull/71) **CHANGES_REQUESTED** | graph-task4 · `graph-task4-url-state-selection` | — | — | — | — | — | — | — | AMEND: CI FAILURE + URL sync | `CHANGES_REQUESTED` |
| E3 | [#44](https://github.com/ruvebal/ttod/pull/44) **CLOSED** 2026-10-13 | oracle-task1 · `oracle-task1-streamed-response-rendering` | 24 | 24 | 18 | 9 | 10 | 8 | **93** | CLOSED superseded by #42 (Task 1 on main via cumulative) | — |
| E3 | [#45](https://github.com/ruvebal/ttod/pull/45) **CLOSED** 2026-10-13 | oracle-task2 · `oracle-task2-live-region-announcement` | 24 | 24 | 18 | 10 | 10 | 8 | **94** | CLOSED superseded by #42 | — |
| E3 | [#38](https://github.com/ruvebal/ttod/pull/38) **CLOSED** 2026-10-13 | oracle-task3 · `oracle-task3-grounded-creative-disclosure` | 24 | 24 | 18 | 10 | 10 | 8 | **94** | CLOSED superseded by #42 | — |
| E3 | [#39](https://github.com/ruvebal/ttod/pull/39) **CLOSED** 2026-10-13 | oracle-task4 · `oracle-task4-session-history` | 24 | 24 | 18 | 9 | 10 | 8 | **93** | CLOSED superseded by #42 | — |
| E3 | [#40](https://github.com/ruvebal/ttod/pull/40) **CLOSED** 2026-10-13 | oracle-task5 · `oracle-task5-preparing-state` | 24 | 24 | 18 | 9 | 10 | 8 | **93** | CLOSED superseded by #42 | — |
| E3 | [#41](https://github.com/ruvebal/ttod/pull/41) **CLOSED** 2026-10-13 | oracle-task6 · `oracle-task6-recovery-error-state` | 24 | 24 | 18 | 9 | 10 | 8 | **93** | CLOSED superseded by #42 | — |
| E3 | [#42](https://github.com/ruvebal/ttod/pull/42) **MERGED** 2026-10-11 | oracle-task7 · `oracle-task7-unit-component-tests` | 25 | 25 | 20 | 10 | 10 | 10 | **100** | MERGED; **cumulative Tasks 1–7** (stack explicitly on 1–6) | — |
| E4 | [#37](https://github.com/ruvebal/ttod/pull/37) **CLOSED** | pwa-task1-bad · `main` | — | — | — | — | — | — | — | CLOSED; superseded by #51 | — |
| E4 | [#51](https://github.com/ruvebal/ttod/pull/51) **MERGED** 2026-10-08 | pwa-task1 · `pwa-task1-service-worker` | 24 | 24 | 20 | 10 | 10 | 9 | **97** | MERGED | — |
| E4 | [#46](https://github.com/ruvebal/ttod/pull/46) **MERGED** 2026-10-11 | pwa-task2 · `pwa-task2-offline-oracle` | 24 | 24 | 18 | 10 | 10 | 9 | **95** | MERGED | — |
| E4 | [#47](https://github.com/ruvebal/ttod/pull/47) **MERGED** 2026-10-11 | pwa-task3 · `pwa-task3-cache-policies` | 24 | 24 | 18 | 10 | 10 | 9 | **95** | MERGED | — |
| E4 | [#49](https://github.com/ruvebal/ttod/pull/49) **MERGED** 2026-10-12 | pwa-task4 · `pwa-task4-offline-queue` | 25 | 25 | 18 | 9 | 10 | 9 | **96** | MERGED; flush-on-online | — |
| E4 | [#50](https://github.com/ruvebal/ttod/pull/50) **MERGED** 2026-10-12 | pwa-task5 · `pwa-task5-install-quality` | 24 | 24 | 16 | 10 | 10 | 10 | **94** | MERGED; Brave install evidence | — |
| E4 | [#60](https://github.com/ruvebal/ttod/pull/60) **MERGED** 2026-10-11 | pwa-task6 · `pwa-task6-performance` | 25 | 25 | 18 | 10 | 10 | 10 | **98** | MERGED; LCP budget | — |
| E4 | [#69](https://github.com/ruvebal/ttod/pull/69) **MERGED** 2026-10-12 | pwa-task7 · `pwa-task7-offline-tests` | 24 | 24 | 20 | 10 | 10 | 9 | **97** | MERGED; db.test + Page.test | — |
| E4 | [#74](https://github.com/ruvebal/ttod/pull/74) **MERGED** 2026-10-13 | docs(pwa) · `docs/team-4-ai-use` | 25 | 24 | 16 | 10 | 10 | 10 | **95** | MERGED; `docs/uso-ia-team-4.md` AI-use memo (rejected `tsc` drop) | — |
| E5 | [#31](https://github.com/ruvebal/ttod/pull/31)–[#35](https://github.com/ruvebal/ttod/pull/35) **CLOSED** | accounts-task1–5 old | — | — | — | — | — | — | — | CLOSED; replaced by #53/#58/#57/#72/#56 | — |
| E5 | [#53](https://github.com/ruvebal/ttod/pull/53) **MERGED** 2026-10-13 | accounts-task1 · `accounts-task1-ssr-auth` | 24 | 24 | 16 | 8 | 10 | 9 | **91** | MERGED; empty login reject + `requireUser` | — |
| E5 | [#58](https://github.com/ruvebal/ttod/pull/58) **MERGED** 2026-10-13 | accounts-task2 · `accounts-task2-personal-library` | 24 | 24 | 16 | 9 | 10 | 9 | **92** | MERGED; FavoriteButton on detail only | — |
| E5 | [#57](https://github.com/ruvebal/ttod/pull/57) **MERGED** 2026-10-13 | accounts-task3 · `accounts-task3-proposal-endpoint` | 25 | 24 | 16 | 8 | 10 | 9 | **92** | MERGED; server origin/author + ProposalStore | — |
| E5 | [#72](https://github.com/ruvebal/ttod/pull/72) **MERGED** 2026-10-13 | accounts-task4 · `accounts-task4-review-pipeline` | 24 | 24 | 14 | 8 | 10 | 9 | **89** | MERGED; reviewer role gate | — |
| E5 | [#56](https://github.com/ruvebal/ttod/pull/56) **MERGED** 2026-10-13 | accounts-task5 · `accounts-task5-public-pat` | 25 | 24 | 18 | 8 | 10 | 9 | **94** | MERGED; Bearer PAT only on /wisdom/random | — |
| E5 | [#73](https://github.com/ruvebal/ttod/pull/73) **MERGED** 2026-10-11 | accounts-task6 · `accounts-task6-api-guide` | 24 | 24 | 16 | 8 | 10 | 9 | **91** | MERGED; API guide EN/ES + api_client | — |
| E5 | [#59](https://github.com/ruvebal/ttod/pull/59) **MERGED** 2026-10-11 | accounts-task7 · `accounts-task7-auth-library-api-tests` | 24 | 24 | 20 | 8 | 10 | 9 | **95** | MERGED; feature-organized tests + npm test in CI | — |

---

## Group rollup (scored PRs only)

| Group | Scored n | Mean Σ | Median Σ | Notes |
| --- | ---: | ---: | ---: | --- |
| E1 Content | 5 | 96 | 98 | #61–#64 merged; #65/#67/#68 still open |
| E2 Graph | 1 | 98 | 98 | stack still AMEND |
| E3 Oracle | 7 | 94 | 93 | **seam complete** (#42 cumulative; #44–#41 closed superseded) |
| E4 PWA | 8 | 96 | 96 | **seam complete** (+ #74 memo) |
| E5 Accounts | 7 | 92 | 92 | **seam complete** |

---

## Merge order (remaining)

1. **Content:** (#61–#64 done) → #65 → #67 → #68  
2. **Graph:** #52 → #55 → #71  
3. **Oracle:** done (#42)  
4. **Accounts:** done  
5. **PWA:** done (+ #74 AI-use memo)  

Instructor Update branch / conflict resolve is merge hygiene — not a student reject reason.

### Oracle note (2026-10-13)

Per-task PRs #44/#45/#38/#39/#40/#41 looked unmergeable (`DIRTY` / `CHANGES_REQUESTED`) only as stale branches. Product work for Tasks 1–6 was already on `main` via #42’s stacked commits. Closed as superseded; scores credit the work that shipped.

---

## Companion CSV

[`COHORT-PR-SCORECARD-2026-10-07.csv`](./COHORT-PR-SCORECARD-2026-10-07.csv) (rewritten same snapshot).

_Updated: 2026-10-13 evening (#74 PWA AI-use memo)._
