import { readFile } from 'node:fs/promises';

const allTexts = process.argv.slice(2);
const arrayOfTexts = allTexts.map((x) => readFile(x, 'utf8'));

try {
  const files = await Promise.all(arrayOfTexts);
  console.log(files.join('\n'));
} catch (error) {
  console.log(error);
  process.exit(1);
}
