/* exported getKeys */
function getKeys(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}

/** Define a function named 'getValues', that accepts one argument, 'object'
 *    Declare a variable named 'array', and assign it to an empty array
 *    Begin a loop that iterates through the 'object' object, where
 *      For each key in the object
 *        Add the value of key to the end of the 'array' array
 *    Return the value of the 'array' variable.
 */
