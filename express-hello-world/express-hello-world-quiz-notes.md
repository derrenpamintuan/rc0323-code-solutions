# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
A routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

- What is Express middleware useful for?
Executing any code
Making changes to the request and response objects
End the request-response cycle
Calling the next middleware function in the stack

- How do you mount a middleware with an Express application?
By using the app.use([path,] callback [, callback…]) method.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
The next middleware function (commonly denoted by a variable named next)

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
