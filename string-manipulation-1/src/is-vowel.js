/* exported isVowel */
function isVowel(character) {
  const vowel = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  for (let i = 0; i < vowel.length; i++) {
    if (character === vowel[i]) {
      return true;
    }
  }
  return false;
}

/** define a function named 'isVowels', that accepts one argument, 'character'
 *    declare a variable named 'vowel', and assign it the lower case and upper case vowels in the alphabet
 *    begin a loop that iterates through the 'vowel' array, where
 *      if the condition character object is strictly equal to vowel at index i
 *        return the value of true
 *    return the value of false
 */
