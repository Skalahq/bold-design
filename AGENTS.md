# bold-design

Bold Design — hand-authored UI primitives + git-only shadcn registry. No npm publishing.

## Workflow

- Source of truth: `packages/ui/src/`. Items are declared in `registry/registry.ts`.
- `registry.json` is **generated** — run `bun run registry:build` after any item/file/import change. Never hand-edit it.
- NEVER run `bunx shadcn add` inside this repo.
- Merging to `main` publishes: consumers install via `bunx shadcn@latest add skalahq/bold-design/<item>`.
- Styling lives in `packages/ui/theme.css` (Tailwind v4 `@theme` tokens + `--ui-*` bridge). Consumers import it AFTER `@import "tailwindcss";`.
