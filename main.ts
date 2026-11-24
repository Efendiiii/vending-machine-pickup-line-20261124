import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Hey, I only take exact change — but for you, I'd let you press all my buttons for free.";

// Guard: the gate is 1–200 UTF-8 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 chars, got ${chars}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
