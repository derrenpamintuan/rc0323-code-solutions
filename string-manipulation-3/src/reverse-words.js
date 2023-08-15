/* exported reverseWords */
function reverseWords(string) {
  const words = string.split(' ');
  const reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let reversedWord = '';

    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }

    reversedWords.push(reversedWord);
  }

  return reversedWords.join(' ');
}
