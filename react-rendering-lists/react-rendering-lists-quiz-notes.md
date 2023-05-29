# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
 When you need to show several instances of the same component using different data when building interfaces such as things like lists of comments, or galleries of profile images. In these situations, you can store that data in JavaScript objects and arrays and use methods like map() and filter() to render lists of components from them.

- Why is it important for React components to be data-driven?
 Allows you to store complex forms in the database so you can reuse them in numerous developer environments.

- Where in the component code would a list of React components typically be built?
 Typically, a list of React components would be built in the map() method.

- What `Array` method is commonly used to create a list of React components?
 The map() method, which takes in an array of data and maps it to an array of components, so that each data item is represented by a corresponding component.

- Why do components in a list need to have unique keys?
 Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items get moved, inserted, or deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

- What is the best value to use as a "key" prop when rendering lists?
 If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.

 If your data is locally generated and persisted locally, use an incrementing counter like crypto.randomUUID() or a package like uuid when creating items.

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
