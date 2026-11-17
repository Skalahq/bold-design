// Item naming: PascalCase file stem -> kebab-case registry item name.
// Shared by registry.ts (item declarations) and build.ts (relative-import
// mapping) so the two can never drift.
export const kebab = (stem: string) =>
  stem
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
