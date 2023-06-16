export default function postpone(queue) {
  if (queue.peek() !== undefined) {
    const q = queue.dequeue();
    queue.enqueue(q);
  }
}
