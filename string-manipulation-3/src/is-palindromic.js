/* exported isPalindromic */
function isPalindromic(string) {

  const string2 = string.replaceAll(' ', '');

  const reversed = [];
  for (let i = 0; i < string2.length; i++) {
    reversed.unshift(string2[i]);
  }

  if (reversed.join('') === string2) {
    return true;
  } else {
    return false;
  }
}
