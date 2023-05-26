# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
 It is used to serve static files, such as images, CSS files, and JavaScript files. These are files that don’t change and don’t need to be modified by the server before being sent to the client.

 When you use express.static middleware, you’re allowing users to access the files in the given directory.

- What does `express.static()` return?
 If it is true, it returns a call to next() to invoke the next middleware in the stack. Else if it can’t find a file, it returns an HTTP 404.

- What are several examples of static files?
 Images, CSS files, and JavaScript files (files that don’t change and don’t need to be modified by the server before being sent to the client).

- What is a good way to serve application images using Express?
 By using express.static(), it cuts the users start up time for the application by not needing to download those static files on initial render. It is called when only needed, which speeds up start up time.

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
