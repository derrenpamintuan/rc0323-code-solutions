function ExampleConstructor() {

}

console.log('prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

const result = new ExampleConstructor();
console.log('newResult:', result);

const instance = result instanceof ExampleConstructor;
console.log('instanceof:', instance);
