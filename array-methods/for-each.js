const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((n) => console.log(n));

console.log('Reverse order:');
values.forEach((n, index) => {
  const reverseIndex = (values.length - 1) - index;

  const reverseElement = values[reverseIndex];

  console.log(reverseElement);
});
