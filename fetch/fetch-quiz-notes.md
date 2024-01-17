# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
 It returns a promise that resolves with a response object.

- What is the default request method used by `fetch()`?
 The default request method of fetch() is the get method.

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
 Within the fetch() parameter, its first argument is the url path to the resource you want to fetch, and for the second is an optional init object that allows you to control a number of different settings, such as the request method.

- How does `fetch` report errors?
 A fetch() promise will reject with a TypeError when a network error is encountered or CORS is misconfigured on the server-side, although this usually means permission issues or similar - a 404 does not constitute a network error, for example.


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
