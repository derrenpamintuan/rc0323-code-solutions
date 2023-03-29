/* exported capitalizeWord */
function capitalizeWord(word) {
  const lowerCased = word.toLowerCase();
  const upperCased = word[0].toUpperCase();
  if (lowerCased === 'javascript') {
    return 'JavaScript';
  }
  return upperCased + lowerCased.slice(1);
}

/** Define a function named 'capitalizeWord', that accepts one argument, 'word'
 *    Declare a variable named 'lowerCased' and assign it to the value of the toLowerCase method of the word object
 *    Declare a variable named 'upperCased' and assign it to the value of the toUpperCased method of the word object
 *    If the condition of the variable lowercased is strictly equal to the string 'javascript'
 *      Return the string value 'JavaScript'
 *    Return the value of 'upperCased' concatenated with the value of the slice method of the lowerCased object starting at 1
*/
