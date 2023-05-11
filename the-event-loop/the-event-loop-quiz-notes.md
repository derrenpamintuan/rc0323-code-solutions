# the-event-loop-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the JavaScript Event Loop?
Looks at the Call Stack, and look at the task queue. If the stack is empty it takes the first thing on the queue and pushes in onto the Call Stack which then runs it.

Call Stack runs one thing at a time.

- What is different between "blocking" and "non-blocking" with respect to how code is executed?
Blocking is code that is slow. For example, when you create a while loop to 1 to 1,000,000, or network requests, or image processing. When the code is running for awhile, you can’t do anything because the browser is blocked/stuck until the code is finished loading. The solution to that problem is asynchronous callbacks with setTimeout methods.

Non blocking code is when you write code that is fluent and doesn’t block any of the further code you’ve created. Therefore, using setTimeout with asynchronous functions pushes requests from the api to the callback queue without delay, and unblocks the requests that make the code load.


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
