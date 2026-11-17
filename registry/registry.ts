import type { Registry } from "shadcn/schema";

import { kebab } from "./kebab";

// Source of truth for registry items. `registry/build.ts` derives
// `dependencies` and `registryDependencies` from actual file imports, so only
// name/type/title/description/files are declared here. `registry.json` is
// generated — never hand-edit it.
const repo = "skalahq/bold-design";
const src = "packages/ui/src";

const descriptions: Record<string, string> = {
  "field-styles":
    "Shared Tailwind class sets for input-like primitives (Field, Input, SearchInput, Textarea). Required by them.",
  "multi-input":
    "Space-separated word slots with paste spreading, per-slot navigation and cancelable changes. Ships multi-input.ts (the ui-sdk view) and MultiInput.tsx (the React wrapper) as one unit.",
  phrase:
    "A three-column definition row: term, mark, description — used for glossary-style listings.",
};

// Every component file in src/ is exactly one item; targets are explicit so
// files land flat in the consumer's `components/ui/` with PascalCase names,
// matching upstream skala-vault imports (`./ui/Button`).
const componentItems = [
  "Avatar",
  "Bar",
  "Brand",
  "Button",
  "CheckBox",
  "Display",
  "DropdownMenu",
  "Field",
  "Frame",
  "Input",
  "Label",
  "Lede",
  "Mark",
  "MenuToggle",
  "Nav",
  "NavItem",
  "Note",
  "Page",
  "Phrase",
  "PhraseItem",
  "Row",
  "RowActions",
  "SearchInput",
  "Segment",
  "Segments",
  "Subnav",
  "Table",
  "Td",
  "Textarea",
  "Th",
  "Tools",
  "Topbar",
  "field-styles",
  "multi-input",
];

// multi-input is ONE item with two files: MultiInput.tsx imports ./multi-input
// relatively and both must land beside each other.
const filesFor = (stem: string) => {
  const file = (name: string, ext: "ts" | "tsx") => ({
    path: `${src}/${name}.${ext}`,
    type: "registry:ui" as const,
    target: `components/ui/${name}.${ext}`,
  });
  return stem === "multi-input"
    ? [file("MultiInput", "tsx"), file("multi-input", "ts")]
    : [file(stem, stem === "field-styles" ? "ts" : "tsx")];
};

const registry: Registry = {
  name: "bold",
  homepage: "https://github.com/skalahq/bold-design",
  items: [
    ...componentItems.map((stem) => ({
      name: kebab(stem),
      type: "registry:ui" as const,
      title: stem,
      ...(descriptions[kebab(stem)] ? { description: descriptions[kebab(stem)] } : {}),
      files: filesFor(stem),
    })),
    {
      name: "theme",
      type: "registry:file" as const,
      title: "theme",
      description:
        "Tailwind v4 tokens + --ui-* bridge consumed by every primitive. Import AFTER @import \"tailwindcss\";.",
      files: [
        {
          path: "packages/ui/theme.css",
          type: "registry:file" as const,
          target: "app/theme.css",
        },
      ],
    },
  ],
};

export default registry;
