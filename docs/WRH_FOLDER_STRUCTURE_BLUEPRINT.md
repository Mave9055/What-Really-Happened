# WRH Folder Structure Blueprint

## Core Principle

**One system = one purpose = one boundary.**

This blueprint defines the target information architecture for WRH with strict boundaries between clinical content, legal/compliance operations, and software delivery.

## Security Enforcement Rules (Non-Negotiable)

1. No file labeled `private`, `internal`, or `confidential` may exist in any public repository.
2. The `/public` directory in `wrh-portal` must contain only static safe assets (images, icons) and must not contain scripts, debug tools, or data collectors.
3. Any violation of these rules blocks deployment immediately.
4. Private operational files must exist only in `wrh-private` (non-GitHub storage).

## Entry Point Rule

All users begin with a role-specific `START_HERE` document. Direct navigation into deep subfolders is discouraged and treated as unsupported workflow.

## Ownership Model

- `wrh-clinical-system` → Clinical Director / Program Lead
- `wrh-legal-ops` → Operations / Compliance Lead
- `wrh-portal` → Engineering Lead

Cross-repository edits require explicit coordination and sign-off from impacted owners.

## Deployment Flow Overview

1. Clinical content is versioned and approved in `wrh-clinical-system`.
2. Legal/compliance documentation is finalized in `wrh-legal-ops`.
3. `wrh-portal` consumes approved outputs only and does not directly author clinical/legal source-of-truth content.

This preserves separation between content authority and software delivery for auditability.

## Preferred Model: 3-Repository Structure

### 1) `wrh-clinical-system`

**Purpose:** Trauma program content only (facilitators, trainers, participants).

```text
wrh-clinical-system/
│
├── README.md
├── START_HERE_FACILITATOR.md
├── START_HERE_TRAINER.md
│
├── manual/
│   ├── full/
│   │   ├── Part1.md
│   │   ├── Part2.md
│   │   └── Part3.md
│   │
│   ├── sessions/
│   │   ├── S00_Introduction.md
│   │   ├── S01_The_Mechanism.md
│   │   ├── S02_The_Blueprint.md
│   │   ├── S07_The_Disappearing_Act.md
│   │   └── ...
│   │
│   └── refactored/
│       ├── Session11.md
│       ├── Session12.md
│       └── ...
│
├── facilitator-tools/
│   ├── Facilitator_Tactical_Cockpit.md
│   ├── Facilitator_Decompression_Protocol.md
│   ├── Facilitator_Readiness_Checklist.md
│   └── Risk_Management_Checklist.md
│
├── participant-materials/
│   ├── Plan_B_Wallet_Card.md
│   ├── Mobile_Plan_B_View.md
│   └── Safety_and_Participation_Rules.md
│
├── diagrams/
│   ├── ef_arc.png
│   ├── the_loop.png
│   ├── the_mask.png
│   └── ...
│
└── glossary/
    └── WRH_Glossary.md
```

**Boundary rule:** If a therapist/facilitator needs it, it belongs here. If a developer is editing this repository for product code work, boundaries are being violated.

---

### 2) `wrh-legal-ops`

**Purpose:** Business operations, compliance, grants, and outreach only.

```text
wrh-legal-ops/
│
├── README.md
├── START_HERE_ADMIN.md
├── START_HERE_VA_REVIEWER.md
│
├── program/
│   ├── WRH_Program_Description_Federal.md
│   ├── VA_Program_Description.md
│   └── One_Click_Pilot_Proposal.pdf
│
├── compliance/
│   ├── Compliance_and_Trust_Signals.md
│   ├── State_Compliance_Addendum_Template.md
│   └── Confidentiality_Agreement.md
│
├── grants/
│   ├── grant_match_matrix_public.md
│   ├── grant_match_matrix.pdf
│   └── evaluation_framework.pdf
│
├── outreach/
│   ├── Outreach-Email-Template.md
│   └── Capabilities-Statement_2026.pdf
│
├── pilots/
│   └── Stepping_Stones_Pilot_Addendum.md
│
└── assets-public/
    ├── logos/
    ├── branding/
    └── diagrams/
```

**Not allowed in this repository:**
- Debug scripts
- Internal trackers
- Any content marked private/confidential for internal-only use

---

### 3) `wrh-portal`

**Purpose:** Software only (web client, server, schema, tests, scripts).

```text
wrh-portal/
│
├── README.md
├── START_HERE_DEVELOPER.md
│
├── apps/
│   └── client/
│       ├── index.html
│       ├── public/
│       │   └── (STRICTLY SAFE FILES ONLY)
│       │
│       └── src/
│           ├── components/
│           ├── pages/
│           ├── hooks/
│           ├── contexts/
│           └── lib/
│
├── server/
│   ├── core/
│   ├── routers.ts
│   ├── db.ts
│   └── storage.ts
│
├── database/
│   ├── schema.ts
│   ├── relations.ts
│   └── migrations/
│
├── scripts/
│   ├── seed-db.mjs
│   └── setup.sh
│
├── config/
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── drizzle.config.ts
│
├── tests/
│   ├── auth.test.ts
│   └── curriculum.test.ts
│
└── .gitignore
```

**Required rule:** `/public` contains safe, audit-ready assets only.

---

## Private Data Boundary (Not a Repository)

```text
wrh-private/
│
├── Grant_Operations_Tracker.md
├── internal_notes/
├── financials/
└── strategy/
```

This location stays outside GitHub and outside shared/public repositories.

## Fallback Model: Single Monorepo With Hard Walls

If WRH intentionally stays in one repository, use this exact layout:

```text
wrh-monorepo/
│
├── apps/
│   └── portal/
│
├── packages/
│   ├── clinical/
│   └── legal/
│
├── private/        ← gitignored
│
├── docs/
│   ├── START_HERE_FACILITATOR.md
│   ├── START_HERE_DEVELOPER.md
│   └── START_HERE_ADMIN.md
│
└── README.md
```

This fallback is valid only with strict discipline on boundary enforcement.

## Migration Notes From Current Repository

Given this current repository already includes application code (`client/`, `server/`, `shared/`), it maps most directly to the **`wrh-portal`** target. Clinical and legal documents should be extracted into their own repositories to avoid boundary mixing.

Immediate cleanup requirement during migration: remove debug/data-collector scripts from public app surfaces and relocate any private operational files into `wrh-private` storage.
