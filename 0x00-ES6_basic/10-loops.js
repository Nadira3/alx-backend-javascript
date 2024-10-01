export default function appendToEachArrayValue(array, appendString) {
  const newArr = [...array];
  for (const [index, value] of newArr.entries()) {
    newArr[index] = appendString + value;
  }

  return newArr;
}
