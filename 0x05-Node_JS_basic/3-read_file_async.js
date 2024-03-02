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
          sweCount = sweCount + 1;
          sweNames.push(firstName);
        }
      });
      console.log(`Number of students: ${rows.length - 1}`);
      console.log(`Number of students in CS: ${csCount}. List: ${csNames.join(', ')}`);
      console.log(`Number of students in SWE: ${sweCount}. List: ${sweNames.join(', ')}`);

      resolve();
    });
  });
}

module.exports = countStudents;
