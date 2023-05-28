import express from 'express';
import pg from 'pg';

const app = express();

app.use('/', express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }

    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    if (grade) {
      res.json(grade);
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
      from "grades"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const course = req.body.course;
    const name = req.body.name;
    const score = Number(req.body.score);

    if (!name) {
      res.status(400).json({ error: 'Name is required' });
      return;

    } else if (!course) {
      res.status(400).json({ error: 'Course is required' });
      return;

    } else if (!score) {
      res.status(400).json({ error: 'Score is required' });
      return;

    } else if (!Number.isInteger(score) || score < 0 || score > 100) {
      res.status(400).json({ error: 'Score must be a positive integer between 0 and 100' });
      return;

    } else {
      const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
      `;
      const params = [name, course, score];
      const result = await db.query(sql, params);
      const grade = result.rows[0];
      res.status(201).json(grade);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);

    if (!Number.isInteger(gradeId) || gradeId < 1) {
      res.status(400).json({ error: 'gradeId must be a positive integer' });
      return;

    } else if (!name) {
      res.status(400).json({ error: 'Name is required' });
      return;

    } else if (!course) {
      res.status(400).json({ error: 'Course is required' });
      return;

    } else if (!score) {
      res.status(400).json({ error: 'Score is required' });
      return;

    } else if (!Number.isInteger(score) || score < 0 || score > 100) {
      res.status(400).json({ error: 'Score must be a positive integer between 0 and 100' });
      return;

    } else {
      const sql = `
      update "grades"
      set "name" = $1,
        "course" = $2,
        "score" = $3
      where "gradeId" = $4
      returning *
      `;

      const params = [name, course, score, gradeId];
      const result = await db.query(sql, params);
      const grade = result.rows[0];

      if (!grade) {
        res.status(404).json({ error: `No existing gradeId of ${gradeId}` });
        return;
      } else {
        res.status(200).json(grade);
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId < 1) {
      res.status(400).json({ error: 'gradeId must be a positive integer' });
      return;
    }

    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    if (!grade) {
      res.status(404).json({ error: `No existing gradeId of ${gradeId}` });
    } else {
      const sql2 = `
      delete
      from "grades"
      where "gradeId" = $1
      `;

      await db.query(sql2, params);
      res.status(204).json();
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  }
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
