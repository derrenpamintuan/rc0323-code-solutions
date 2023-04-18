# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
A implicit parameter of all JavaScript functions.
Refers to an object. Depending on how (this) is used, if in an object method, it refers to the object. If used by itself, refers to the global object.

- What does it mean to say that `this` is an "implicit parameter"?
It is available parameter in a function’s code block even though it was never included in the function’s parameter list or declared with a variable.

- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
The value of (this) is determined at call time.

- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
(this) is referring to the character object.

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
“It's-a-me, Mario!” (this) now has the value of the character object at firstName because it is determined when we call the function.

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
"It's-a-me, undefined!" (this) is undefined because we are calling the function by itself and the window does not have a firstName property.

- How can you tell what the value of `this` will be for a particular function or method **definition**?
(this) can be identified if it is inside an object.

- How can you tell what the value of `this` is for a particular function or method **call**?
The value of (this) can be recognized as "the object to the left of the dot" when the function is called (as a method).

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
