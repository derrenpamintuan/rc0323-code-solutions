/* exported omit */
function omit(source, keys) {
  const newObj = {};
  for (const key in source) {
    newObj[key] = source[key];
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        delete newObj[key];
      }
    }
  }
  return newObj;
}
