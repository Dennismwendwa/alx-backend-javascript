import fs from 'fs/promises';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then(data => {
        const rows = data.split('\n').filter((line) => line.trim() !== '');

        const students = {
          CS: [],
          SWE: []
        };

        rows.forEach((row) => {
          const [firstName, , , field] = row.split(',');
          students[field].push(firstName);
        });

        resolve(students);
      })
      .catch(error => {
        reject(new Error('Cannot load the database'));
      });
  });
};

module.exports = readDatabase;
