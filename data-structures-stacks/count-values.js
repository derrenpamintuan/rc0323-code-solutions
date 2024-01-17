export default function countValues(stack) {
  let count = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    count += 1;
  }
  return count;
}
