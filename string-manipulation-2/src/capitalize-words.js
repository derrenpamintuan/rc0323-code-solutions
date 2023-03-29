/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}

/** Define a function named 'capitalizeWords', that accepts one argument, 'string'
 *    Declare a variable named 'words', and assign it to the value of the split method of the string object on a space
 *    Begin a loop that iterates through the 'words' array, where
 *      Reassign each index to be the first letter capitalized concatenated with the rest of the word into lower cased
 *    Return the words array joined together with a space to become a string
 */
