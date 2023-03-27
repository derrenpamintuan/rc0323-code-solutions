/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  obj[key] = value;
  return obj;
}

/** Declare a function named 'toObject', that accepts one argument, 'keyValuePair'
 *    Declare a variable 'obj' and assign it to an empty object
 *    Declare a variable 'key' and assign it to keyValuePair at index of 0
 *    Declare a variable 'value' and assign it to keyValuePair at index of 1
 *    Assign 'obj' at 'key' to be the value of 'value'
 *    return the value of the variable 'obj'
 */
