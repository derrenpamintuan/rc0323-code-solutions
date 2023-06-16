export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const count = 0;
  while (count !== index) {
    const q = queue.dequeue();
    queue.enqueue(q);
    index--;
  }
  return queue.dequeue();
}
