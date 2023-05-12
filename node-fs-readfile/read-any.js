import { readFile } from 'node:fs/promises';

try {
  const text = process.argv[2];
  const file = await readFile('./' + text, 'utf8');
  console.log(file);
} catch (error) {
  console.log(error);
}
