# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
Start off with parameter/parameters if any, followed by the arrow, followed by an expression or curly braces containing statements.

() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
If not used with block syntax, you do not need the return keyword.

let add = (x, y) => x + y;

- When using _concise body syntax_, how do you return an object literal?
Declare the variable, assign it parameters if any, use the arrow function, wrap the object literal inside of parenthesis. If parenthesis are not used, it will cause an error as JavaScript engine cannot distinguish between a block and an object.

let setColor = color => ({value: color });

- In the expression
    ```js
    foo(() => 42);
    ```
  - Identify the arrow function
  () => 42

  - How many arguments does the arrow function take?
  0 arguments.

  - What value does it return?
  It returns 42.

  - How many arguments are passed to the function `foo`?
  1 argument.

  - What type of argument is passed to the function `foo`?
  A function.

- In the expression
    ```js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
    ```
    - Identify the arrow function
    (y) => {console.log(`4y = ${4 * y}`);
	  });

    - How many arguments does the arrow function take?
    1 argument.

    - What value does it return?
    No value.

    - How many arguments are passed to the function `bar`?
    1 argument.

    - What type of argument is passed to the function `bar`?
    A function.

    - When does the arrow function's code get executed?
    When bar is called.

- How does the value of `this` differ between standard functions and arrow functions?
In an arrow function, (this) is lexical. Meaning that the arrow function uses the (this) variable, or constructs it, from the enclosing lexical scope.

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
