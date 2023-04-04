# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
We use the console to make sure our code is running the way it is supposed to, and the console prints any bugs and errors in our code.

- What is the purpose of events and event handling?
Events are fired to notify code of "interesting changes" that may affect code execution “MDN”. They occur when a user interacts with a page or object. A way for how you want your code to respond to a user.

- Are all possible parameters required to use a JavaScript method or function?
No they are not required.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
The addEventListener() method.

- What is a callback function?
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action “MDN”.

- What object is passed into an event listener callback when the event fires?
The event object.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
The read-only target property of the Event interface is a reference to the object onto which the event was dispatched “MDN”. The actual element that is interacted with.

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
In the first snippet the parenthesis are omitted from the handleClick function, and this is because we would want this function to happen when the event fires. In the second snippet the parenthesis remain next to the handleClick function and this would indicate that the function should run as the page loads.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
