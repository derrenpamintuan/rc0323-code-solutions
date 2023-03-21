function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds exercise:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log('greet exercise:', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('getArea exercise:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('getFistName exercise:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  const lastElement = array.length - 1;
  return array[lastElement];
}
console.log('getLastElement exercise:', getLastElement(['propane', 'and', 'propane', 'accessories']));
