export default function appendToEachArrayValue(array, appendString) {
  const nwArray = [];
  for (const value of array) {
    nwArray.push(appendString + value);
  }

  return nwArray;
}
