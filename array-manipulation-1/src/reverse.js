/* exported reverse */
function reverse(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

/** Define a function named 'reverse', that accepts one argument, 'array'
 *    Declare a variable named 'newArray', and assign it to an empty array
 *      Begin a loop that iterates through the 'array' array in reverse, where
 *        For each index in the array:
 *          Add the value of the array at index of i to the end of the 'newArray' array
 *    return the value of the variable 'newArray'
 */
