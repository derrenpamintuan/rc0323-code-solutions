import { writeFile } from 'node:fs/promises';

const note = process.argv[2];

try {
  const append = writeFile('note.txt', note + '\n');
  await append;
} catch (err) {
  console.error(err);
  process.exit(1);
}
