#!/usr/bin/node
// This script creates http server

const http = require('http');
// const countStudents = require('./3-read_file_async');

const [, , databaseFileName] = process.argv;

const fs = require('fs');

function countStudents(path) {
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
          csCount = csCount + 1;
          csNames.push(firstName);
        } else if (field === 'SWE') {
          sweCount = csCount + 1;
          sweNames.push(firstName);
        }
      });
      const result = {
        totalStudents: rows.length - 1,
        cs: {
          count: csCount,
          list: csNames.join(', '),
        },
        swe: {
          count: sweCount,
          list: sweNames.join(', '),
        },
        notInUse,
      };

      const output = `Number of students: ${result.totalStudents}\nNumber of students in CS: ${result.cs.count}. List: ${result.cs.list}\nNumber of students in SWE: ${result.swe.count}. List: ${result.swe.list}`;

      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const handleStudents = async () => {
      try {
        res.write('This is the list of our students\n');
        const result = await countStudents(databaseFileName);

        res.end(`${result}`);
      } catch (error) {
        res.end(`Error: ${error.message}`);
      }
    };

    handleStudents();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
