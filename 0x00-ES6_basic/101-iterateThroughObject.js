export default function iterateThroughObject(reportWithIterator) {
  const employeeArray = [...reportWithIterator];
  const result = employeeArray.join(' | ');
  return result;
}
