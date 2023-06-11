# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
 A component is mounted to the DOM during its initial render.

- What is a React Effect?
 Effects let you specify code that are caused by rendering itself, rather than by a particular event.

 It will tell React that the component needs to do something after render.

- When should you use an Effect and when should you not use an Effect?
 Effects should be used when you need to “step out” of your React code and synchronize with some external systems like APIs, third-party widgets, network, etc.

 It should not be used if the Effect only adjusts some state based on other state, you might not need an effect.

- When do Effects run?
 Effects run at the end of a commit after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).

- What function is used to declare an Effect?
 The useEffect(setup, dependencies?) function that is imported from ’react’.

- What are Effect dependencies and how do you declare them?
 The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.

 They are declared inside the useEffect function method, after declaring the setup which is separated by a comma.

- Why would you want to clean up from an Effect?
 Some Effects need to specify how to stop, undo, or clean up whatever they’re doing. For example, “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and “fetch” needs either “cancel” or “ignore”.

- How do you clean up from an Effect?
 By returning a cleanup function within the setup of a useEffect function.

- When does the cleanup function run?
 It is called each time before the Effect runs again, and one final time when the component unmount (gets removed).

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
