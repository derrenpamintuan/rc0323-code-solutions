const student = {
  firstName: 'Derren',
  lastName: 'Pamintuan',
  age: 26
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Server';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Scion',
  model: 'FR-S',
  year: 2015
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isconvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'BB',
  type: 'pug'
};

delete pet.name;
delete pet['type'];
console.log('value of pet:', pet);
