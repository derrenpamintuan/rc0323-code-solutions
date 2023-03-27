/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/** Define a function named 'compact', that accepts one argument, 'array'
 *    Declare a variable named 'newArray', and assign it to an empty array
 *    Begin a loop iteration that iterates through the 'array' array, where
 *      For each index in the array:
 *        If the condition the boolean value of array at index i is strictly equal to true
 *          Add the value of array at index i to the end of the 'newArray' array
 *    return the value of the variable newArray
 */
