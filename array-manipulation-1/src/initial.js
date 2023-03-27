/* exported initial */
function initial(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/** Define a function named 'initial', that accepts one argument, 'array'
 *    Declare a variable named 'newArray', and assign it to an empty array
 *      Begin a loop that iterates through the 'array' array, where
 *        For each index in the array minus the last one:
 *          Add the value of array at index of i to the end of the 'newArray' array
 *     Return the value of the variable 'newArray'
 */
