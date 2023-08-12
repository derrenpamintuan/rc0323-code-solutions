/* exported difference */
function difference(first, second) {
  const result = [];

  for (let i = 0; i < first.length; i++) {
    if (result.includes(first[i])) {
      const index = result.indexOf(first[i]);
      result.splice(index, 1);
      continue;
    }
    result.push(first[i]);
  }

  for (let i = 0; i < second.length; i++) {
    if (result.includes(second[i])) {
      const index = result.indexOf(second[i]);
      result.splice(index, 1);
      continue;
    }
    result.push(second[i]);
  }

  return result;
}
