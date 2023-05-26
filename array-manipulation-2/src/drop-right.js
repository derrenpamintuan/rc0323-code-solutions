/* exported dropRight */
function dropRight(array, count) {
  const newArray = array.slice(0, array.length - count);
  if (count > array.length) {
    return [];
  } else {
    return newArray;
  }
}
