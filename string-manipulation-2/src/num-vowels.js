/* exported numVowels */
function numVowels(string) {
  let number = 0;
  const lower = string.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === 'a' || lower[i] === 'e' || lower[i] === 'i' || lower[i] === 'o' || lower[i] === 'u') {
      number += 1;
    }
  }
  return number;
}

/** Define a function named 'numVowels', that accepts one argumen, 'string'
 *    Declare a variable named 'number' and assign it to the value of 0
 *    Declare a variable named 'lower' and assign it to the value of the toLowerCase method of the string object
 *    Begin a loop that iterates through the 'lower' string, where
 *      For each index in the array check if the current value of lower is equal to a vowel
 *        Increment number by one if it is
 *    Return the value of the variable number
 */
