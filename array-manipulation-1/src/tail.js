/* exported tail */
function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/** define a function named 'tail', that accepts one argument, 'array'
 *    Declare a variable named 'newArray', and assign it to an empty array
 *      Begin a loop that iterates through the 'array' array starting at inedx 1, where
 *        For each index in the array:
 *          Add the value of array at index i to the end of the 'newArray' array
 *      return the value of the variable 'newArray'
 */
