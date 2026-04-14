# Trauma/CPTSD Repository Evaluation (Mave9055)

Date: 2026-04-14 (UTC)
Evaluator scope: trauma/CPTSD-related repositories discoverable from the public GitHub profile and current local repository.

## Repositories reviewed

1. `What-Really-Happened` (local repository in this workspace)
2. `26laws`
3. `CPTSD-Straight-Facts`
4. `from-the-storm-to-the-fire`
5. `ideal-octo-disco`
6. `what-really-happened-redesign`
7. `nervous-system-marketing`

## Scoring rubric (1-10)
- 1-3 = mostly incomplete/non-operational for the category.
- 4-6 = partially developed, with major gaps.
- 7-8 = solid and usable, but not proposal-grade.
- 9-10 = excellent, polished, and federal proposal ready.

## Scorecard

| Repo | Content Quality | Educational Value | Deployment Readiness | Clinical/Programmatic Alignment | Mission Clarity | Marketability / Proposal Potential | Technical Execution | Total /70 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| What-Really-Happened | 8 | 9 | 6 | 7 | 8 | 7 | 6 | 51 |
| 26laws | 9 | 8 | 9 | 8 | 9 | 9 | 8 | 60 |
| CPTSD-Straight-Facts | 7 | 8 | 7 | 7 | 7 | 7 | 7 | 50 |
| from-the-storm-to-the-fire | 7 | 6 | 8 | 6 | 8 | 7 | 7 | 49 |
| ideal-octo-disco | 6 | 5 | 5 | 5 | 7 | 4 | 4 | 36 |
| what-really-happened-redesign | 6 | 6 | 7 | 6 | 8 | 6 | 7 | 46 |
| nervous-system-marketing | 4 | 3 | 5 | 4 | 6 | 4 | 6 | 32 |

## Repository-by-repository analysis

### 1) What-Really-Happened
**Why these scores**
- Strong lived-experience-informed curriculum and facilitator framing across a full 12-session structure plus intake anchor, with practical safety protocol language and pacing. This is rare and strong.  
- Educational structure is explicit and reusable (cold open, grounding, core concept, mirror moment, reframes, open loop).  
- Deployment readiness is mixed: the curriculum artifact is strong, but `README.md` is minimal and does not explain installation, audience, delivery model, or clinical guardrails for external partners.

**Key evidence**
- Full 12-session manual and structured flow in `facilitator-manual.md`.  
- Minimal project documentation in `README.md`.

**Gap to 10/10**
- Expand `README.md` with: purpose, audience, setup, facilitator prerequisites, safety exclusions, crisis pathways, outcomes metrics, and licensing.
- Add `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and a short `EVIDENCE_BASE.md` mapping each session to framework references.
- Add implementation package (`implementation-guide.md`) for VA/HHS/DoD environments.

### 2) 26laws
**Why these scores**
- Best-balanced repo overall. It clearly centers lived experience while translating to plain-language clinical terms.
- Strong deployment posture for a content site (multi-page structure, Netlify config, deployment checklist, and clear information architecture).
- Clinical alignment appears directionally strong from framing, but still needs stronger explicit citations and formal evidence mapping for federal clinical procurement.

**Key evidence**
- Rich README with scope, site architecture, and deployment claims.
- Presence of `DEPLOYMENT-CHECKLIST.md`, `netlify.toml`, resources page, evidence page, and curriculum page.

**Gap to 10/10**
- Add formal bibliography and claims-to-citation table.
- Add measurable learning outcomes + pre/post instrument definitions.
- Add compliance and risk docs (clinical disclaimer boundaries, accessibility statement, privacy statement).

### 3) CPTSD-Straight-Facts
**Why these scores**
- Solid content foundation implied by dedicated files: facts, expanded facts, glossary, FAQ, and content corpus.
- Good educational potential due to explicit knowledge modules.
- Weakness: README is too thin; clinical framing and intended use are not visible enough to outside reviewers.

**Key evidence**
- Content corpus files: `cptsd_100_facts.md`, `cptsd_100_facts_expanded.md`, `cptsd_faq.md`, `cptsd_glossary.md`.
- Modern app structure (`client/server/shared`, TypeScript stack).

**Gap to 10/10**
- Replace minimal README with detailed product brief, architecture, setup/run steps, and user pathways.
- Add citation-backed `clinical-references.md` and `content-governance.md`.
- Add release/versioning and acceptance criteria docs.

### 4) from-the-storm-to-the-fire
**Why these scores**
- Strong mission clarity as a memoir platform with lived experience emphasis.
- Good deployment signals via Jekyll-like structure (`_config.yml`, `_layouts`, `_includes`, chapters).
- Educational and clinical alignment is indirect unless explicitly linked to psychoeducation learning objectives.

**Key evidence**
- Structured narrative site files (`chapters`, `index.md`, `read-first.md`, `_config.yml`).
- README is minimal and does not operationalize educational use.

**Gap to 10/10**
- Add a facilitator/learner guide connecting memoir chapters to psychoeducation outcomes.
- Add trauma-informed content warnings and stabilization prompts for readers.
- Add federal-facing one-pager showing how memoir content supports workforce training and survivor engagement.

### 5) what-really-happened-redesign
**Why these scores**
- Good mission statement and modern stack structure.
- Looks more like a technical redesign scaffold than a content-complete educational program repository.
- Limited visible documentation weakens contracting confidence.

**Key evidence**
- Front-end project layout with `client/server/shared`, `package.json`, and assets.
- README is sparse.

**Gap to 10/10**
- Add comprehensive README (install/run/deploy, design goals, accessibility conformance, clinical safeguards).
- Add demo URLs and screenshot walkthrough.
- Add explicit mapping to WRH learning program outcomes.

### 6) ideal-octo-disco
**Why these scores**
- Clear brief about trauma resources and a nervous-system check-in tool.
- Repository is minimal (`README.md` + `index.html`) and lacks documentation, tests, and operational context.
- As-is, not strong enough for serious evaluation by program officers.

**Key evidence**
- 7 commits and a two-file visible structure.
- README text describes tool value but not implementation, privacy controls, or evidence alignment.

**Gap to 10/10**
- Add architecture and privacy docs (data handling, no-PHI posture, local storage details).
- Add facilitator/user guide and measurement framework.
- Expand beyond single-page prototype and include QA checks.

### 7) nervous-system-marketing
**Why these scores**
- Potentially useful support repo, but currently reads as infrastructure shell with very limited content narrative.
- Good technical scaffold, poor educational and clinical substance as currently documented.

**Key evidence**
- TS project layout and standard files present.
- README is minimal and does not define deliverables, audience, or outcomes.

**Gap to 10/10**
- Define concrete assets (campaign kits, handouts, trauma-safe messaging playbooks).
- Add publishing workflow, quality gates, and repository governance.
- Clarify role relative to core educational repos and procurement narrative.

## Overall ranking (strongest to weakest)
1. `26laws`
2. `What-Really-Happened`
3. `CPTSD-Straight-Facts`
4. `from-the-storm-to-the-fire`
5. `what-really-happened-redesign`
6. `ideal-octo-disco`
7. `nervous-system-marketing`

## Top-priority actions (highest impact now)

1. **Create a federal-grade documentation baseline across all trauma repos**  
   Standardize `README.md` + `LICENSE` + `EVIDENCE_BASE.md` + `IMPLEMENTATION_GUIDE.md` + `SAFETY_AND_ESCALATION.md` + `ACCESSIBILITY.md`. This single move dramatically increases trust for evaluators and contracting stakeholders.

2. **Build a unified evidence and outcomes layer**  
   Add a cross-repo evidence map linking content claims to frameworks (polyvagal/window-of-tolerance/IFS/somatic), and add measurable outcomes (pre/post confidence, dysregulation recognition, regulation skills adoption).

3. **Package deployment proof and operational maturity**  
   Add release tags, deploy badges, environment setup docs, test commands, and one live demo per core repo. Federal reviewers need reproducibility, not just concept strength.

## Direct assessment: federal proposal readiness

**Current status: promising but not yet fully proposal-ready for VA/HHS/DoD award evaluation.**

- **What is strong:** authentic lived-experience authority, meaningful psychoeducational architecture, and substantial mission-driven content.
- **What is missing:** formal evidence traceability, standardized documentation, compliance framing, outcomes measurement, and polished operational artifacts expected in federal reviews.

If you implement the top 3 actions above, this body of work can move from “compelling founder-driven content” to “credible program capability evidence” for contracting contexts.
