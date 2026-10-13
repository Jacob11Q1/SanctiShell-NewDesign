// Lists every placeholder photo and empty <PhotoSlot> still in the code (CLAUDE.md §7b).
// Run before launch: `npm run check:placeholders`. Exits with code 1 if any remain.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["app", "components", "lib"];
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(tsx?|css|mdx?)$/.test(name)) {
      readFileSync(path, "utf8")
        .split("\n")
        .forEach((line, i) => {
          // Stock photos, and empty slots still waiting for a real photo
          if (line.includes("placeholders/") || line.includes("<PhotoSlot"))
            hits.push(`${path}:${i + 1}  ${line.trim()}`);
        });
    }
  }
}

roots.forEach(walk);

if (hits.length === 0) {
  console.info("No placeholder images left. Ready for launch.");
} else {
  console.error(`${hits.length} placeholder image reference(s) still in use:\n`);
  hits.forEach((hit) => console.error(`  ${hit}`));
  process.exit(1);
}
