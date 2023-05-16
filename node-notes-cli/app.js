import { readFile, writeFile } from 'node:fs/promises';

const [, , operation, ...args] = process.argv;

async function processArgs() {
  switch (operation) {
    case 'read': return readNotes();
    case 'create': return createNote(args[0]);
    case 'update': return updateNote(args[0], args[1]);
    case 'delete': return deleteNote(args[0]);
    default: throw new Error(`Unrecognized operation: ${operation}`);
  }
}

async function readNotes() {
  const data = await getDataObj();
  const notes = data.notes;

  for (const note in notes) {
    console.log(`${note}: ${notes[note]}`);
  }
}

async function getDataObj() {
  const data = await readFile('./data.json', 'utf8');
  return JSON.parse(data);
}

async function createNote(note) {
  const data = await getDataObj();
  const noteId = data.nextId;

  data.nextId++;
  data.notes[noteId] = note;

  await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
}

async function updateNote(noteId, note) {
  const data = await getDataObj();
  const notes = data.notes;

  if (notes[noteId] !== undefined) {
    notes[noteId] = note;
  } else {
    console.log(`Error: Note ID ${noteId} not found.`);
  }

  await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
}

async function deleteNote(noteId) {
  const data = await getDataObj();
  const notes = data.notes;

  if (notes[noteId] !== undefined) {
    delete notes[noteId];
  } else {
    console.log(`Error: Note ID ${noteId} not found.`);
  }

  await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
}

try {
  await processArgs();
} catch (err) {
  console.log(err.message);
}
