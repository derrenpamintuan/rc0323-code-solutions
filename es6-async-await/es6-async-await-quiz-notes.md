# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
They enable asynchronous, promise based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

A simpler way to work with asynchronous promise-based code.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
The difference is the syntax. They initiate the same code, but the way the code is written is different.

- When do you use `async`?
Adding it to the start of a function makes it an async function.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
Use await when you want to wait for a promise to resolve before initiating the next line of code. Don't use await on a non-asynchronous function (doesn't return a promise).
It will skip the code that is written.

- How do you handle errors with `await`?
With the try/catch statement, the catch will handle any rejected promises.

- What do `try`, `catch` and `throw` do? When do you use them?
Try will execute the code in its block.
Catch will handle any errors in its code block.
Throw will throw any exceptions, indicates poor code that execution of the current code block can't continue.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
The promise will continue to run asynchronously, but it won't pause to wait for it. The promise might be accessed insteads of the promises resolved value.
The catch block will not execute the rejected promise.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
Async and await, its much easier to follow, understand, and reason about since it is written sequentially.


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
