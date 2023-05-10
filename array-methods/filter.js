const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
const even = numbers.filter((x) => x % 2 === 0);
console.log('Even numbers', even);

const includesD = names.filter((x) => x.includes('D') || x.includes('d'));
console.log(includesD);
