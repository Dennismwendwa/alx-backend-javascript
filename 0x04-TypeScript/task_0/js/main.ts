// Interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students
const student1: Student = {
  firstName: 'Millicent',
  lastName: 'Wanderi',
  age: 25,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'Samuel',
  lastName: 'Mutua',
  age: 27,
  location: 'Mombasa'
};

// Creating array(list)
const studentsList: Student[] = [student1, student2];

// Table rendering
const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
