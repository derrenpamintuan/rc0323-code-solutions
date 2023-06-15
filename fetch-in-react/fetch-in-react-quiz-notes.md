# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
 It can be used to connect to an external system where you get information from, and display that to useState.

- What browser function can be used to make HTTP requests to a server in React?
 The fetch browser function can be used to make HTTP requests to a server in React.

- How do you use `useEffect` to load component data just once when the component mounts?
 Within its parameters, for the second parameter for its dependencies, you can state an empty array so that it will only load the component data once.

- How do you use `useEffect` to load component data every time the data key changes?
 Within its parameters, for the second parameter for its dependencies, you can state the components data so that it will load the component data every time the key changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
 A better alternative is using a third-party data management library such as React Query or Vercel SWR.


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
