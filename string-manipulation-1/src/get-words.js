/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  return string.split(' ');
}

/** Define a funcion named 'getWords', that accepts one argument, 'string'
 *    if the condition length method of the string object is strictly equal to 0
 *      return an empty array
 *    return the value of the split method of the string object with a argument of a space
 */
