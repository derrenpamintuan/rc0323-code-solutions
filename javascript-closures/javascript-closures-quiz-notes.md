# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
A scope is determined when you create a function inside of your code, everything
inside that function becomes a local scope and everything outside that function
becomes a global scope.

- What allows JavaScript functions to "remember" variables from their surroundings?
Closures allow JavaScript functions to remember variables from their surrounding.

- What values does a closure contain?
The value of a closure contains a collection of all the variables in a scope at
the time of creation of the function.

- When is a closure created?
A closure is created when a function gets declared.

- How can you tell if a function will be created with a closure?
All declared functions will be created with closure, except for functions created
with the "new Function" syntax.

- In React, what is one important case where you need to know if a closure was created?
When working with useEffect, it is important to know if a closure was created.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
  width: 100%;
}
```
