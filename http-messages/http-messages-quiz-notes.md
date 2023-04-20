# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  A piece of computer hardware or software that accesses a service made available by a server as part of the client server model of computer networks. “Wikipedia”

- What is a server?
  A piece of computer hardware of software (computer program) that provides functionality for other programs or devices, called “clients”. “Wikipedia”

- Which HTTP method does a browser issue to a web server when you visit a URL?
  The get method.

- What three things are on the start-line of an HTTP **request** message?
  An HTTP method, the request target (usually a url/absolute path), and the HTTP version.

- What three things are on the start-line of an HTTP **response** message?
  The protocol version (usually HTTP/1.1), a status code (indicating success or failure of the request), and a status text (a brief textual description of the status code to help a person understand it).

- What are HTTP headers?
  They let the client and the server pass additional information with an HTTP request or response. “MDN”

- Where would you go if you wanted to learn more about a specific HTTP Header?
  MDN.

- Is a body required for a valid HTTP request or response message?
  Not all requests have one: requests fetching resources, like GET, HEAD, DELETE, or OPTIONS, usually don't need one.
  Not all responses have one: responses with a status code that sufficiently answers the request without the need for corresponding payload usually don't. “MDN”

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
