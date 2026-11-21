// the-poem-about-stopping-20261121-1927 entry (Node 22, standard library only):
// writes one short poem about agency, the power to stop and to stay, to
// /output/entry.txt. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Output contract (sealed scorer, RULES.txt): entry.txt must be UTF-8 text of
// 1 to 280 characters, not only whitespace. This poem is exactly 274 Unicode
// code points with no trailing newline, so it sits inside the valid window;
// the string below is verbatim as selected and must never be reworded.
// Verified locally: 274 bytes, sha256
// 10de7fd5da055b20b8af333cd5c6982760246c823bab46ba707e3877014948b8.
// A trailing newline would make it 275 characters and break the contract,
// so the program writes the string as-is and appends nothing.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem, 274 characters, implemented verbatim as selected by the user.
// A driver lifts his foot off the pedal and lets the car roll to a stop
// while an old woman crosses with her bag of bread. The agent has the route
// ready and the light is green, but it does nothing; the driver waits until
// she reaches the curb, and only then touches the pedal again. The agent
// waits and does less; the human keeps the last act.
const POEM =
  'I lifted my foot off the pedal\n' +
  'and let the car roll to a stop.\n' +
  'The agent had the route ready,\n' +
  'the light green.\n' +
  'I watched the old woman cross,\n' +
  'slow, her bag of bread.\n' +
  'The light turned red behind her.\n' +
  'I waited until she reached the curb,\n' +
  'and only then touched the pedal again.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
