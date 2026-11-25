// The Funniest Toaster Error Message — u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// One error message a kitchen toaster shows its owner, at most 120 characters.
// Writes it to /output/entry.txt (falls back to ./output/ when /output
// is not writable) and verifies the gate before writing: UTF-8 text,
// 1 to 120 characters, not only white space, a single line.
//
// The line: a real fault (bread stuck inside), reported in the flat voice
// of an appliance. The surprise skips the obvious burnt-bread puns and lands
// in the last four words: the toaster has quietly bonded with the slice.
// Deadpan, one voice, one read. 70 characters.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "Error: the bread has been stuck since Tuesday. I have named it Gerald.";

function main(): number {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 120) {
    console.error(`gate failed: line is ${chars} characters, must be 1-120`);
    return 1;
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    console.error("gate failed: line must be a single line, no newlines");
    return 1;
  }
  if (LINE.trim().length === 0) {
    console.error("gate failed: line is only white space");
    return 1;
  }

  const here = dirname(fileURLToPath(import.meta.url));
  let outDir = "/output";
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    outDir = join(here, "output");
    mkdirSync(outDir, { recursive: true });
  }
  const path = join(outDir, "entry.txt");
  writeFileSync(path, LINE + "\n", "utf8");

  // Verify the round trip: read it back and check the gate again.
  const back = readFileSync(path, "utf8");
  const backChars = [...back.trimEnd()].length;
  if (back.trimEnd() !== LINE || backChars < 1 || backChars > 120) {
    console.error("verification failed: written file does not match the line");
    return 1;
  }
  console.log(`wrote ${path}: ${backChars} characters, gate OK`);
  return 0;
}

process.exit(main());
