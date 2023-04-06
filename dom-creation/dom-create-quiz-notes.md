# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
No, it is stored into a variable and not created until you add it to the DOM.


- How do you add an element as a child to another element?
By using the appendChild() method, it has one parameter, the new content to be added to the DOM tree.

- What do you pass as the arguments to the `element.setAttribute()` method?
A string name of an attribute whose value is to be set (name), and string of a value to assign to the attribute (value).

- What steps do you need to take in order to insert a new element into the page?
Create the element using the createElement() method, (optional) give it text content using the createTextNode() method, and add it to the DOM by using the appendChild() method.

- What is the `textContent` property of an element object for?
It represents the text content of the element.

- Name two ways to set the `class` attribute of a DOM element.
By using the setAttribute() method, and by searching for it through the DOM and using the className property method on the attribute then assigning it to a new attribute.

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
You are able to add elements and texts to HTML, and you can also locate objects efficiently.

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
