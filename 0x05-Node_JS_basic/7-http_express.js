const express = require('express');
const app = express();

const [, , databaseFileName] = process.argv;

const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.split('\n').filter((line) => line.trim() !== '');

      let csCount = 0;
      let sweCount = 0;

      const csNames = [];
      const sweNames = [];
      const notInUse = [];

      rows.forEach((row) => {
        const [firstName, lastName, age, field] = row.split(',');

        notInUse.push(lastName);
        notInUse.push(age);

        if (field === 'CS') {
          csCount++;
          csNames.push(firstName);
        } else if (field === 'SWE') {
          sweCount++;
          sweNames.push(firstName);
        }
      });
      const result = {
        totalStudents: rows.length - 1,
        cs: {
          count: csCount,
          list: csNames.join(', ')
        },
        swe: {
          count: sweCount,
          list: sweNames.join(', ')
        },
        notInUse
      };

      const output = `Number of students: ${result.totalStudents}\nNumber of students in CS: ${result.cs.count}. List: ${result.cs.list}\nNumber of students in SWE: ${result.swe.count}. List: ${result.swe.list}`;

      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    res.write('This is the list of our students\n');
    const result = await countStudents(databaseFileName);
    res.end(`${result}`);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}\n`);
  }
});

app.use((req, res) => {
  res.status(404).send(`Cannot GET ${req.originalUrl}\n`);
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
