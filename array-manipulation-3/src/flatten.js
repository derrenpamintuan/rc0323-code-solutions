/* exported flatten */
function flatten(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array[i].forEach(x => result.push(x));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
