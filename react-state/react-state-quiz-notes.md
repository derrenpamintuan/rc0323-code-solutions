# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
 In React, any function that starts with “use”, is called a Hook.

 Hooks are special functions that are only available while React is rendering. They let you “hook into” different React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
 Hooks can only be called at the top level of your components or your own hooks.

 You can’t call hooks inside conditions, loops, or other nested functions.

- What is the purpose of state in React?
 The purpose of state in React is to “remember” things, such as , the current input value, the current image, the shopping cart, etc. It is a component-specific memory.

- Why can't we just maintain state in a local variable?
 State is not tied to a particular function call or a place in the code, but its “local” to the specific place on the screen.

 State is fully private to the component it is declaring.

- What two actions happen when you call a `state setter` function?
 A state setter function will update the state variable and trigger React to render the component again.

- When does the local `state variable` get updated with the new value?
 When an event occurs, such as onClick, you can update the index(state) by calling a state setter function that updates the index(state) when a user has clicked on a object.

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
