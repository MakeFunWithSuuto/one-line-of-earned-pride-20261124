// Writes one line of quietly earned pride to /output/entry.txt (deterministic, stdlib only).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = 'At seventy-one, after a winter of night classes, Rosa fills in the bank slip herself, letter by slow letter, and the teller just says, "Next."';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), ENTRY);
