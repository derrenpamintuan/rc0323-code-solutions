# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
 An action that is triggered as a result of the user action or system generated event.

- What is an "event handler"? Which component declares the handler?
 Functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

 The component that declares the handler is the event handler function, it can be handleClick, handleHover, handleFocus, etc.

- How do you pass an event handler to a React component?
 First define a function and then pass it as a prop value to the JSX tag. Or, you can use an arrow function for the prop value, and then give it logic.

- What is the naming convention for event handlers?
 Having names that start with handle, followed by the name of the element. handleXxx, where Xxx is the event it is handling.

 Xxx can stand for Click, Hover, Focus, etc.

- What is an "event handler prop"? Which component declares the prop?
 An event handler prop is a prop that fired when a user does something such as a click, and the prop for that is onClick.

 The component(or function) that declares the event handler is the component with the function being defined.

- What are some custom event handler props a component may wish to define?
 Events can be anything that a component wishes. An event may indicate that a button was clicked, or that a complex control’s value was changed, or that a menu item was selected.

- What is the naming convention for custom event handler props?
 React documentation suggests that custom Event Handler props be named onXxx, where Xxx is the event. This is just a convention, but it aids code clarity.

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
