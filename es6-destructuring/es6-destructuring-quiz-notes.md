# es6-destructuring-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is destructuring, conceptually?
It is an alternative way to assign properties to an object or array.

- What is the syntax for `Object` destructuring?
Start off by declaring a variable or variables using let or const, followed by opening curly brace, followed by a property name you want to assign and colon to declare the variable, followed by the variable name and comma separating more properties and variables that are assigned, followed by closing curly brace, followed by assignment operator and name of object.

let { property1: variable1, property2: variable2 } = object;

- What is the syntax for `Array` destructuring?
Start off by declaring a variable or variables using let or const, followed by opening square bracket, followed by the variables that are being declared separated by commas, followed by closing square bracket, followed by assignment operator and name of object.

let [x, y, z] = getScores();

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
If curly brackets or square braces are on the left hand side of the assignment operator, we are doing destructuring. If they are on the right hand side, we are creating a new literal.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
