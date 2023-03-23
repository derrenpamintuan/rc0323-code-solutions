/* exported reverseWord */
function reverseWord(word) {
  let string = '';
  for (let i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  return string;
}

/** Define a function named 'reverseWord', that accepts one argument, 'word'
 *    Declare a variable named string and assign it to an empty string
 *    Begin a loop that iterates through the 'word' array, where
 *      The value of the expression string concatenated with word at i is being reassigned to the variable string
 *    return the string variable
 */
