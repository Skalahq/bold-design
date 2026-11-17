# bold-design

Bold Design primitives as a git-only shadcn registry. Vendored via the shadcn CLI straight from this repo's default branch — no npm package.

## Install

```sh
bunx shadcn@latest add skalahq/bold-design/button
# pin the branch:
bunx shadcn@latest add skalahq/bold-design/button#main
# everything:
bunx shadcn@latest add skalahq/bold-design
```

## Theming (required)

Primitives are styled entirely with Tailwind v4 tokens defined in [`packages/ui/theme.css`](packages/ui/theme.css). After installing any item, copy/import that file into your app CSS **after** `@import "tailwindcss";`:

```css
@import "tailwindcss";
@import "@ui-sdk/core/web.css" layer(components);
@import "./theme.css"; /* or paste its contents in */
```

The Geist font faces in `theme.css` expect `@fontsource-variable/geist` and `@fontsource-variable/geist-mono` installed (or replace the `@font-face` blocks with your own).

## Items

One registry item per primitive; item names are kebab-case, files land flat in `components/ui/` (PascalCase, matching upstream skala-vault imports):

`avatar`, `bar`, `brand`, `button`, `check-box`, `display`, `dropdown-menu`, `field`, `frame`, `input`, `label`, `lede`, `mark`, `menu-toggle`, `multi-input` (ships `MultiInput.tsx` + `multi-input.ts` together), `nav`, `nav-item`, `note`, `page`, `phrase`, `phrase-item`, `row`, `row-actions`, `search-input`, `segment`, `segments`, `subnav`, `table`, `td`, `textarea`, `th`, `tools`, `topbar`, `field-styles`, `theme`.

Dependencies (`cn`, `class-variance-authority`, `@ui-sdk/*`) are derived from actual imports at build time by `registry/build.ts`; `registry.json` is generated — never hand-edit it.
