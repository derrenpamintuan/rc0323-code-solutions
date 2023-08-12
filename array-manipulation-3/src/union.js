/* exported union */
function union(first, second) {
  const result = [];

  for (let i = 0; i < first.length; i++) {
    if (result.includes(first[i])) {
      continue;
    }
    result.push(first[i]);
  }

  for (let i = 0; i < second.length; i++) {
    if (result.includes(second[i])) {
      continue;
    }
    result.push(second[i]);
  }

  return result;
}
