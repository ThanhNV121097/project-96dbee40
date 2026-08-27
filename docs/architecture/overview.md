# Architecture Overview — Hello World

## Shape

Static frontend only. No backend, no database, no auth, no API. `docker-compose.yml` already matches this shape with one `frontend` service.

## Stack

| Part | Choice | Reason | Rejected alternative |
|---|---|---|---|
| Frontend | Next.js 15 App Router, TypeScript | Default stack; supports static page and later component mounting | Plain HTML would be smaller but diverges from repository CI and Docker runtime |
| Styling | Tailwind v3 plus CSS design tokens in `app/globals.css` | CI checks token use; stories share same visual vocabulary | Component-level hardcoded CSS values fail token gate |
| Backend | None | SRS stores nothing and calls no server | Go API would be dead weight for one fixed page |
| Database | None | No persistence in approved scope | PostgreSQL would add setup and failure paths with no requirement |

## Repository layout

```text
docs/architecture/overview.md        Architecture source for later agents
docs/home/SRS.md                     Approved requirements
code/frontend/package.json           Frontend scripts and pinned dependencies
code/frontend/app/layout.tsx         App Router layout
code/frontend/app/page.tsx           Composition root for story components
code/frontend/app/globals.css        Shared tokens and base styles
code/frontend/components/            Story components, PascalCase file names
code/frontend/lib/mock/              Story mock data only when needed
```

`code/backend/` stays absent for current shape. If future scope needs API or storage, reassess project shape before adding it.

## Frontend conventions

- App Router files stay in `code/frontend/app/`.
- `app/page.tsx` stays server component and composition root: imports grouped at top, child elements listed in `main`.
- Story UI owns `components/{Component}.tsx`; default export form is `export default function ComponentName()`.
- Client components need literal first line `"use client"` before any React state, effects, event handlers, refs, or browser APIs.
- Shared visual values live in `app/globals.css` as tokens matching `design/design-system.md`; CSS modules use tokens only, no fallbacks.
- No nav, footer, login, API calls, or database content in Home.

## Design tokens

`app/globals.css` defines all approved categories: color, spacing, typography, radius, shadow, and motion. Tokens follow semantic names from `design/design-system.md`.

## Environment

| File | Keys | Notes |
|---|---|---|
| `.env.example` | `FRONTEND_PORT`, `FRONTEND_MEM_LIMIT`, `IMAGE_REPO`, `IMAGE_TAG` | Compose-only local/deploy knobs; no secrets |
| `code/frontend/.env.example` | none required | Frontend reads no runtime env vars today |

## Run and verify

From repository root:

```bash
docker compose up --build
```

Local frontend commands:

```bash
cd code/frontend
npm ci
npm run lint
npm run build
npm test --if-present
```

CI gate in `.github/workflows/ci.yml` runs the same frontend checks plus design-token checks on pull requests. Container workflow files and Dockerfiles are fixed platform files and must not be edited by story work.

## Risks and rollout

- Main risk: overbuilding backend or database despite static SRS. Do not add until requirements change.
- Design-system drift is caught partly by CI; reviewer still checks visual match to approved design.
- Rollout is one frontend container. No migrations, compatibility steps, or data rollback needed.
