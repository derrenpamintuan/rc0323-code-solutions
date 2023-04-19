# javascript-prototypes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What kind of inheritance does the JavaScript programming language use?
Prototype-based (or prototypal) inheritance.

- What is a prototype in JavaScript?
An object that contains properties and (predominantly) methods that can be used by other objects.

- How is it possible to call methods on strings, arrays, and numbers even though those methods don't actually exist on strings, arrays, and numbers?
Arrays, strings, and numbers don't actually have the methods that is known. Instead, those methods are defined on a "prototype" object and arrays, strings, and numbers borrow those methods when they're needed.

- If an object does not have it's own property or method by a given key, where does JavaScript look for it?
Through inheritance, which it gets from it’s parents property or method.

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
