/* exported chunk */
function chunk(array, size) {
  /* create a new array to store values */
  const newArray = [];
  /* create a count variable to store the array length */
  let count = 0;
  /* while count is less than array.length */
  while (count < array.length) {
    /* push a slice of the array from count to size plus count into the new array */
    newArray.push(array.slice(count, size + count));
    /* increment count by size for each iteration */
    count += size;
  }
  /* return the newArray variable */
  return newArray;
}
