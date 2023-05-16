import express from 'express';

const app = express();
let nextId = 1;
const grades = {};

app.use('/', express.json());

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const x in grades) {
    array.push(grades[x]);
  }
  res.json(array);
});

app.post('/api/grades', (req, res) => {
  console.log('post endpoint');
  console.log(req.body);
  const grade = req.body;
  grade.id = nextId;
  grades[grade.id] = grade;
  res.json(grade);
  nextId++;
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
