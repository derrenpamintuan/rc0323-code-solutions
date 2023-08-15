/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const str1 = firstString.replace(/\s/g, '').toLowerCase();
  const str2 = secondString.replace(/\s/g, '').toLowerCase();

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}
