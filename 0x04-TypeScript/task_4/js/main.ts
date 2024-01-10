export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Terry';
  lastName: 'Mike',
  experienceTeachingC: 10,
};

console.log('C++:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\nReact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
