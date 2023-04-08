/* exported defaults */
function defaults(target, source) {
  const targetObj = Object.assign({}, source, target);
  for (const key in targetObj) {
    target[key] = targetObj[key];
  }
}
