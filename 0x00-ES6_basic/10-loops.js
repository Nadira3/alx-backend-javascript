export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const newArray = [...array];
  for (const arrValue of newArray) {
    const value = arrValue;
    newArray[idx] = appendString + value;
    idx += 1;
  }
  return newArray;
}
