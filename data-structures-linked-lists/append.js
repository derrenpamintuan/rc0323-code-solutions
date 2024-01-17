/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const last = new LinkedList(value);
  while (list.next) {
    list = list.next;
  }
  list.next = last;
}
