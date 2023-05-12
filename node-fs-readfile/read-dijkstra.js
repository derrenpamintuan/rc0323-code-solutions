import { readFile } from 'node:fs/promises';

try {
  const file = await readFile('./dijkstra.txt', 'utf8');
  console.log(file);
} catch (error) {
  console.log(error);
}
