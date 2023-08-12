/* exported intersection */
function intersection(first, second) {
  const result = [];
  const values = {};

  for (let i = 0; i < first.length; i++) {
    if (!values[first[i]]) {
      values[first[i]] = 1;
    } else {
      values[first[i]]++;
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (!values[second[i]]) {
      values[second[i]] = 1;
    } else {
      values[second[i]]++;
    }
  }

  for (const value in values) {
    if (values[value] > 1 && !isNaN(value)) {
      result.push(Number(value));
    } else if (values[value] > 1 && isNaN(value)) {
      result.push(value);
    }
  }

  return result;
}
