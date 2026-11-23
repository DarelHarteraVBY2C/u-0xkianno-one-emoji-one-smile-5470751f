// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji to $MAKEFUN_OUTPUT_DIR/entry.txt and nothing
// else: no words, no caption, no explanation.
//
// The chosen emoji is U+1FAF6 HEART HANDS: two hands forming a heart.
// It reads as warm and friendly at first glance to a stranger of any age
// or background, it is a deliberate pick rather than the first smiley
// that comes to mind, and it carries no intimacy, sarcasm or flirtation
// that would read oddly from someone unknown.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single emoji, heart hands.
const EMOJI = "\u{1FAF6}";

// Why this emoji, against the judge's brief (most important first):
// 1. Warmth at first glance: two hands shaping a heart is read instantly
//    as kind and friendly, with no context needed.
// 2. Universality: a hand-heart gesture is understood across ages and
//    cultures, with no irony, in-joke or slang that could land wrong.
// 3. Chosen rather than default: it is not the first smiley that comes
//    to mind (🙂 / 😊), yet it stays instantly readable.
// 4. Right for a stranger: it offers warmth without intimacy, sarcasm
//    or flirtation, so it works coming from someone unknown.
// A plain smiley would lose on criterion 4 (too default); a kiss or
// heart-eyes face would lose on criterion 5 (too intimate from a
// stranger). Heart hands sits between the two: warmer than a smiley,
// safer than a kiss.

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

  // Gate (from RULES.txt): entry.txt must be UTF-8 text of 1 to 8
  // characters, not only white space. Count code points, not UTF-16
  // code units, so an astral-plane emoji counts as exactly 1.
  const chars = [...EMOJI];
  if (chars.length < 1 || chars.length > 8) {
    throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
  }
  if (EMOJI.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  // A single emoji must also be a single grapheme cluster: reject any
  // hidden joiner, variation selector or second code point sneaking in.
  const segments = new Intl.Segmenter("en", { granularity: "grapheme" });
  if ([...segments.segment(EMOJI)].length !== 1) {
    throw new Error("entry must be exactly one grapheme cluster");
  }

  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, EMOJI, "utf8");

  // Verify the round trip: what was written must read back byte for byte
  // as the single emoji, with no trailing newline or extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== EMOJI) {
    throw new Error("written entry does not match the intended emoji");
  }
  console.log(
    `wrote entry (${chars.length} character, ${Buffer.byteLength(EMOJI, "utf8")} bytes) to ${target}`,
  );
}

main();
