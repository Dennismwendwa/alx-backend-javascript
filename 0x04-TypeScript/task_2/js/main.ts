// DirectorsInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeachersInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak(){
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(300));
console.log(createEmployee(700));
console.log(createEmployee('ksh10000'));

// function to check if employee is director
function isDirector(employee: Director | Teacher): employee is Director {
 return 'workDirectorTasks' in employee;
}

// work excuter on type of employee
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// test example
const teacherEmployee: Teacher = {
  workFromHome: () => 'Cannot work from home',
  getCoffeeBreak: () => 'Cannot have a break',
  workTeacherTasks: () => 'Getting to work',
};

const directorEmployee: Director = {
  workFromHome: () => 'Working from home',
  getCoffeeBreak: () => 'Getting a coffee break',
  workDirectorTasks: () => 'Getting to director tasks',
};

console.log(executeWork(teacherEmployee));
console.log(executeWork(directorEmployee));

// string literal type for subjects
type Subjects = 'Math' | 'History';

// teaching function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Its holiday time';
  }
}

// test examples
console.log(teachClass('Math'));
console.log(teachClass('History'));
