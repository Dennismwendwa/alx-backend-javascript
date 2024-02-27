const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents (req, res) {
    try {
      const students = await readDatabase('./database.csv');

      res.status(200).send(`This is the list of our students\n${formatStudents(students)}`);
    } catch (error) {
      res.status(500).send('Cannot load the database\n');
    }
  }

  static async getAllStudentsByMajor (req, res) {
    try {
      const major = req.params.major.toUpperCase();
      const validMajors = ['CS', 'SWE'];

      if (!validMajors.includes(major)) {
        res.status(500).send('Major parameter must be CS or SWE\n');
        return;
      }

      const students = await readDatabase('./database.csv');
      const studentsInMajor = students[major];

      res.status(200).send(`List: ${studentsInMajor.join(', ')}\n`);
    } catch (error) {
      res.status(500).send('Cannot load the database\n');
    }
  }
}

const formatStudents = (students) => {
  const formattedStudents = Object.entries(students)
    .sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB))
    .map(([field, names]) => {
      const list = `List: ${names.join(', ')}`;
      return `Number of students in ${field}: ${names.length}. ${list}`;
    })
    .join('\n');

  return formattedStudents;
};

module.export = StudentsController;
