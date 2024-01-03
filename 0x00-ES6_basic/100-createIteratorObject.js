export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]: function* () {
      for (const depertment in report.allEmployees) {
        const employeesInDepartment = report.allEmployees[depertment];
        for (const employee of employeesInDepartment) {
          yield employee;
        }
      }
    },
  };
  return iterator;
}
