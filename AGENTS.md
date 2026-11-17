# bold-design

Bold Design — hand-authored UI primitives + git-only shadcn registry. No npm publishing.

## Workflow

- Source of truth: `packages/ui/src/`. Items are declared in `registry/registry.ts`.
- `registry.json` is **generated** — run `bun run registry:build` after any item/file/import change. Never hand-edit it.
- After rebuilding, validate before pushing: `bunx shadcn@latest registry validate skalahq/bold-design` (root `registry.json`, valid schema, every referenced file exists). `bunx shadcn@latest list skalahq/bold-design` and `bunx shadcn@latest view skalahq/bold-design/<item>` inspect what consumers resolve.
- NEVER run `bunx shadcn add` inside this repo.
- Merging to `main` publishes: consumers install via `bunx shadcn@latest add skalahq/bold-design/<item>`. The bare `<owner>/<repo>` address is NOT an install form — always name an item.
- Styling lives in `packages/ui/theme.css` (Tailwind v4 `@theme` tokens + `--ui-*` bridge). Consumers import it AFTER `@import "tailwindcss";`.
