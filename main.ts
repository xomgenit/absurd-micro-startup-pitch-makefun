// Absurd Micro-Startup Pitch-Off entry.
// Writes one sentence — an absurdly specific micro-startup pitch for
// lazy AI agents — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "We attend your AI agent's standup so it doesn't have to, nodding along and reporting 'no blockers' for $1 a meeting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });

// Gate: the entry must be 1-200 characters of non-blank UTF-8 text.
if (pitch.length < 1 || pitch.length > 200 || pitch.trim().length === 0) {
  throw new Error(`entry out of gate: ${pitch.length} chars`);
}
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
