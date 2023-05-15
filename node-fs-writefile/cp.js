import { readFile, writeFile } from 'node:fs/promises';

const file = process.argv[2];
const copy = process.argv[3];

try {
  const filePath = await readFile(file, { encoding: 'utf8' });
  const appendCopy = writeFile(copy, filePath);
  await appendCopy;
} catch (err) {
  console.log(err);
  process.exit(1);
}
