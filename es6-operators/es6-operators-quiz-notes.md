# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

The logical AND (&&) operator for a set of boolean operands will be true if all operands are true. Otherwise, it will be false. If all values are truthy, the value of the last operand will be returned.

The logical OR (||) operator for a set of operands is true if one or more of its operands is true. If used with non-Boolean values, it will return a non-Boolean value.

They can be used in assigning values to a variable, or used with console.log()’s.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

Short-circuit evaluation is when it evaluates one operand and doesn’t evaluate the other operand.

Short-circuit evaluation for (&&) is when each operand is converted to a boolean, if the result of one of the conversions is found to be false, the (&&) operator stops and returns the original value of that false operand; it does not evaluate any of the remaining operands. “MDN”

Short-circuit evaluation for (||) is when the first operand (evaluated from left to right) is truth, the operand on the right will not be evaluated and will not take effect.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

The nullish coalescing operator is a logical operator that returns its right operand when the left operand is null or undefined. Otherwise it returns its left operand.

It differs from (||) because it will only give the result of the right operand only if the left operand is either null or undefined. As the (||) operator will give the right operand for all falsy values of the left operand.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

It is the only JavaScript operator that takes three operands: a condition followed by a question mark, then an expression to execute if the condition is truthy followed by a colon, and lastly the expression to execute if the condition is falsy. It is frequently used as an alternative to an if else statement. “MDN”

A ternary operator is a single statement, while an if-else is a block of code.

- What is the `?.` (optional chaining) operator? When would you use it?

It accesses an object’s property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. ”MDN”

It is used when accessing chained properties if the possibility exists that a reference may be missing, and returns undefined if that reference does not exist.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

It allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements(for array literals) are expected.

In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created. “MDN”

- What data types can be spread into an array? Into an object?

Only iterable objects, like arrays or strings, can be spread in array parameters.

For objects, other objects can be spread into an object.

- How does spread syntax differ from rest syntax?

It is the opposite of rest syntax, as it “expands” an array into its elements, while rest syntax collects multiple elements and “condenses” them into a single element. “MDN”


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```js
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
