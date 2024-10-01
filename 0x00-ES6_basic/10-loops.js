export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const arrValue of newArray) {
    const value = arrValue;
    newArray[newArray.indexOf(value)] = appendString + value;
  }
  return newArray;
}
