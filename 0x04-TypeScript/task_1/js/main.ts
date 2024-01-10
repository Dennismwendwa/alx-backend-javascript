// Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // index signature to allow any additional attribute
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  constract: false,
};

console.log(teacher3);

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Teacher function interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printteacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};

const result = printteacher('John', 'Doe');
console.log(result);

// constructor interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// students class interface
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentClassConstructor = class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

// Example usage
const studentInstance = new StudentClass('John', 'Doe');
console.log(studentInstance.workOnHomework()); // Output: Currently working
console.log(studentInstance.displayName()); // Output: John