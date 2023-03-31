# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
The default value for the position property is static, this creates a new line for every block-level element and you cannot make a block element sit side by side even if you change it’s width.

- How does setting `position: relative` on an element affect document flow?
Much like static, but you are able to shift the position of an element within its block.

- How does setting `position: relative` on an element affect where it appears on the page?
You are able to shift the position within its block to the top, right, left, or bottom of where it would have been placed in normal flow.

- How does setting `position: absolute` on an element affect document flow?
This can take it out of normal flow, and ignore surrounding elements as a user scrolls up and down a web page as it stays on the users screen.

- How does setting `position: absolute` on an element affect where it appears on the page?
It positions an element to stay on the screen while a user scrolls up and down a web page. You are able to set its position wherever on the screen.

- How do you constrain an absolutely positioned element to a containing block?
By setting the containing blocks position to anything other than static, and using the box properties to position the absolute element.

- What are the four box offset properties?
Top, right, bottom, and left.

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
