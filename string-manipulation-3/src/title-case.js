function titleCase(string) {
  const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  const lowerCasedWords = string.toLowerCase().split(' ');
  const words = [];

  for (let i = 0; i < lowerCasedWords.length; i++) {
    const word = lowerCasedWords[i];

    if (minorWords.includes(word)) {
      words.push(word);
    } else if (word === 'api') {
      words.push(word.toUpperCase());
    } else if (word.includes('javascript')) {
      words.push(word.replace(/javascript/gi, 'JavaScript'));
    } else if (word.includes('-')) {
      const firstWordUpperCased = word[0].toUpperCase() + word.slice(1, word.indexOf('-') + 1);
      const fullWord = firstWordUpperCased + word.charAt(word.indexOf('-') + 1).toUpperCase() + word.slice(word.indexOf('-') + 2);
      words.push(fullWord);
    } else {
      const upperCased = word[0].toUpperCase() + word.slice(1);
      words.push(upperCased);
    }
  }
  const joined = words.join(' ');
  let fullSentence = joined[0].toUpperCase() + joined.slice(1);

  if (fullSentence.includes(':')) {
    const upperCasedLetter = fullSentence.charAt(fullSentence.indexOf(':') + 2).toUpperCase();
    fullSentence = fullSentence.slice(0, fullSentence.indexOf(':') + 2) + upperCasedLetter + fullSentence.slice(fullSentence.indexOf(':') + 3);
  }

  return fullSentence;
}
