import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

async function getData() {
  const jsonData = await readFile('./data.json', 'utf8');
  return JSON.parse(jsonData);
}

app.use('/', express.json());

app.get('/api/notes', async (req, res) => {
  try {
    const data = await getData();
    const notesArray = [];
    for (const i in data.notes) {
      notesArray.push(data.notes[i]);
    }
    res.json(notesArray);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await getData();
    const target = Number(req.params.id);
    if (target < 1 || !Number.isInteger(target) || typeof target !== 'number') {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else if (!data.notes[target]) {
      res.status(404).json({ error: 'cannot find note with id ' + target });
      return;
    } else {
      res.status(200).json(data.notes[target]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const data = await getData();
    const content = req.body.content;

    if (!content) {
      res.status(400).json({ error: 'Content is required' });
      return;
    }

    const note = {
      id: data.nextId,
      content
    };
    data.notes[note.id] = note;
    data.nextId++;

    await writeFile('./data.json', JSON.stringify(data, null, 2));
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await getData();
    const target = Number(req.params.id);
    if (target < 1 || !Number.isInteger(target) || typeof target !== 'number') {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else if (!data.notes[target]) {
      res.status(404).json({ error: 'no existing note with id ' + target });
      return;
    } else {
      delete data.notes[target];
      await writeFile('./data.json', JSON.stringify(data, null, 2));
      res.status(204).json(data.notes[target]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await getData();
    const target = Number(req.params.id);
    const content = req.body.content;

    if (target < 1 || !Number.isInteger(target) || typeof target !== 'number') {
      res.status(404).json({ error: 'id must be a positive integer' });
      return;
    } else if (!content) {
      res.status(404).json({ error: 'Content is required' });
      return;
    } else if (!data.notes[target]) {
      res.status(404).json({ error: 'no existing note with id ' + target });
      return;
    } else {
      data.notes[target].content = content;
      await writeFile('./data.json', JSON.stringify(data, null, 2));
      res.status(200).json(data.notes[target]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured' });
  }
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
