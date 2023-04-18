/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (const key in source) {
    if (source[key] !== undefined) {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
          newObj[key] = source[key];
        }
      }
    }
  }
  return newObj;
}
