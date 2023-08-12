/* exported zip */
function zip(first, second) {
  const result = [];
  let length = 0;

  if (first.length <= second.length) {
    length = first.length;
  } else {
    length = second.length;
  }

  for (let i = 0; i < length; i++) {
    const singleValue = [];
    singleValue.push(first[i]);
    singleValue.push(second[i]);
    result.push(singleValue);
  }
  return result;
}
