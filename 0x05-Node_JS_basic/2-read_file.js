// counting students
const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const rows = data.split('\n').filter((line) => line.trim() !== '');

    let csCount = 0;
    let sweCount = 0;

    const csNames = [];
    const sweNames = [];
    const notInUse = [];

    rows.forEach((row) => {
      const [firstName, lastName, age, field] = row.split(',');

      if (field === 'CS') {
        csCount++;
        csNames.push(firstName);
        notInUse.push(lastName);
        notInUse.push(age);
      } else if (field === 'SWE') {
        sweCount++;
        sweNames.push(firstName);
        notInUse.push(lastName);
        notInUse.push(age);
      }
    });

    console.log(`Number of students: ${rows.length - 1}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csNames.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweNames.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
