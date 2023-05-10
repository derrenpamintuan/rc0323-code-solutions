# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
    - What does `Array.forEach` do?
    Executes a provided function once for each array element in ascending-index order.

    - What should the callback function do?
     A function that is executed for each element in the array. The return value is discarded.

    - What is `Array.forEach` useful for?
    Executing side effects at the end of a chain.

- `Array.map`:
    - What does `Array.map` do?
    Creates a new array populated with the results of calling a provided function on every element in the calling array.

    - What should the callback function return?
    Its return value is added as a single element in the new array.

    - What is `Array.map` useful for?
    Creating a new array from the array map is called upon, storing values from the callback function of the mutated element.

- `Array.filter`:

    - What does `Array.filter` do?
      Creates a shallow copy (copy whose properties share the same references from the source object) of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    - What should the callback function return?
    It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

    - What is `Array.filter` useful for?
    It is good for returning an array that passes the callback functions statements.

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
