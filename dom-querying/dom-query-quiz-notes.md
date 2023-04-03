# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
We log things to the console to see if our code is doing what it is supposed to be doing.

- What is a "model"?
A representation of an object.

- Which "document" is being referred to in the phrase Document Object Model?
The HTML document.

- What is the word "object" referring to in the phrase Document Object Model?
Each node in the DOM tree, which are the document, elements, attributes, and texts of HTML.

- What is a DOM Tree?
A model of a webpage, which turns our elements into nodes.

- Give two examples of `document` methods that retrieve a single element from the DOM.
The methods “getElementById()” (uses the value of an element’s id attribute), and “querySelector()” (uses a css selector, and returns the first matching element).

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
The method “getElementsByClassName()” (selects all elements that have a specific value for their class attribute).

- Why might you want to assign the return value of a DOM query to a variable?
It is useful if you need to work with an element more than once, this saves the browser looking through the DOM tree to find the same element(s) again.

- What `console` method allows you to inspect the properties of a DOM element object?
The method console.dir().

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
It takes in a string of a css selector, and returns only the first of the matching elements, or null if there are no matches.

- What does `document.querySelectorAll()` take as its argument and what does it return?
It takes in a string of a css selector, and returns nodeList of all the matching elements, or null if there are no matches.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
  width: 100%;
}
```
