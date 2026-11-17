import { readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

import type { RegistryItem } from "shadcn/schema";

import { kebab } from "./kebab";
import registry from "./registry";

const root = join(import.meta.dirname, "..");

// Consumers install straight from this repo: `bunx shadcn add <repo>/<item>`.
const repo = "skalahq/bold-design";

const ours = new Set(registry.items.map((item) => item.name));
const provided = new Set(["react", "react-dom", "next"]);

// Imports are the one list that cannot drift from the source, so both
// dependency fields are read from them rather than maintained by hand.
function withDependencies(item: RegistryItem): RegistryItem {
  const dependencies = new Set(item.dependencies);
  const registryDependencies = new Set(item.registryDependencies);
  for (const file of item.files ?? []) {
    const source = readFileSync(join(root, file.path), "utf8");
    for (const [, specifier] of source.matchAll(/from "([^"]+)"/g)) {
      if (specifier.startsWith(".")) {
        // Relative imports map onto sibling items by kebab-cased stem
        // ("./field-styles" -> skalahq/bold-design/field-styles,
        //  "./Button" -> skalahq/bold-design/button).
        const name = kebab(basename(specifier));
        if (ours.has(name) && name !== item.name) registryDependencies.add(`${repo}/${name}`);
      } else if (!specifier.startsWith("@/")) {
        const pkg = specifier
          .split("/")
          .slice(0, specifier.startsWith("@") ? 2 : 1)
          .join("/");
        if (!provided.has(pkg)) dependencies.add(pkg);
      }
    }
  }
  return {
    ...item,
    dependencies: [...dependencies].sort(),
    registryDependencies: [...registryDependencies].sort(),
  };
}

// GitHub installs read this file from the repo root, so it is committed.
// registry.ts is the source of truth; this compiles it down.
await writeFile(
  join(root, "registry.json"),
  `${JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      ...registry,
      items: registry.items.map((item) => withDependencies(item)),
    },
    null,
    2,
  )}\n`,
);
