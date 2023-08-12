/* exported unique */
function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (result.includes(array[i])) {
      continue;
    }

    result.push(array[i]);
  }
  return result;
}
