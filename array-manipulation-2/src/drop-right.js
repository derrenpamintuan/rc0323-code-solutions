/* exported dropRight */
function dropRight(array, count) {
  const newArray = array.slice(0, array.length - count);
  return newArray;
}
