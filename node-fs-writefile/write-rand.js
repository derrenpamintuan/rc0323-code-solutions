import { writeFile } from 'node:fs/promises';

try {
  const append = writeFile('random.txt', Math.random().toString() + '\n');
  await append;
} catch (err) {
  console.error(err);
}
