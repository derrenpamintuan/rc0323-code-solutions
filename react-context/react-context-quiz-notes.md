# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
 Allows data to be managed by one component but easily shared with multiple components.

 Lets the parent component make some information available to any component in the tree below it, no matter how deep, without passing it explicitly through props.

 An alternative to passing props.

- What values can be stored in context?
 Any kind of value.

- How do you create context and make it available to the components?
 Create a file for the context component.

 Import createContext() from react, assign it to a variable and export that variable to different component files needed.

 Import useContext() from react in your component file that wishes to use the context, and import the context component.

 Create a variable within the component that wishes to use the context, assign it to useContext() passing it the imported variable.

- How do you access the context values?
 By using context.Provider and assigning a value to the component.

- When would you use context? (in addition to the best answer: "rarely")
 When passing props becomes inconvenient such as when you need to pass props deeply down a tree, or if many components need the same prop.

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
