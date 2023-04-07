/* exported includes */
function includes(array, count) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === count) {
      return true;
    }
  }
  return false;
}
