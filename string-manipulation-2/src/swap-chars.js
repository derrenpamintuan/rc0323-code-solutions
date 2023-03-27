/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  array[firstIndex] = string[secondIndex];
  array[secondIndex] = string[firstIndex];
  return array.join('');
}

/** Define a function named swapChars, that accepts three arguments, 'firstIndex', 'secondIndex', and 'string'
 *    Declare a variable named 'array' and assign it to the split method of the string object, split with an empty string
 *    Reassign 'array' at 'firstIndex' to be 'string' at 'secondIndex'
 *    Reassign 'array' at 'secondIndex' to be 'string' at 'firstIndex'
 *    Return the joined method of the array object joined with an empty string
 */
