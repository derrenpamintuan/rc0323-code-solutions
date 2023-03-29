/* exported ransomCase */
function ransomCase(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

/** Define a function named 'ransomCase', that accepts one argument, 'string'
 *    Declare a variable named 'newString', and assign it to an empty string
 *    Begin a loop that iterates through the 'string' string , where
 *      If the condition of index is odd
 *        The result of the equation newString concatenated with the toUpperCase method of the string object at index i is being reassigned to the variable newString
 *      Otherwise
 *        The result of the equation newString concatenated with the toLowerCase method of the string object at index i is being reassigned to the variable newString
 *    Return the value of the variable newString
 */
