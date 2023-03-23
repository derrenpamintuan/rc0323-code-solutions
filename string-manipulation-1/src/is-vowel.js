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
