import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

if (isNaN(num1)) {
  console.log('invalid argument:', process.argv[2]);
} else if (isNaN(num2)) {
  console.log('invalid argument:', process.argv[4]);
} else {
  switch (operator) {
    case 'plus':
      console.log('result: ', add(num1, num2));
      break;
    case 'minus':
      console.log('result: ', subtract(num1, num2));
      break;
    case 'times':
      console.log('result: ', multiply(num1, num2));
      break;
    case 'divide':
      console.log('result: ', divide(num1, num2));
      break;
    default:
      console.log('error: please provide valid operator (plus, subtract, times, divide');
  }
}
