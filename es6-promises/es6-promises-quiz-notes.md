# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the three states a Promise can be in?
1) pending: initial state, neither fulfilled nor rejected.
2) fulfilled: meaning that the operation was completed successfully.
3) rejected: meaning that the operation failed.


- How do you handle the fulfillment of a Promise?
With the Promise.prototype.then() method called with a callback function for the fulfilled case of the promise, or with the rejected case, that returns a newly generated promise object, which can optionally be used for chaining.
With async actions.


- How do you handle the rejection of a Promise?
With the Promise.prototype.then() method.
With the Promise.prototype.catch() method.
With error handling.

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
