# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
NPM is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
A way to reuse code and share your code with other developers.

- What is a package?
A file or directory that is described by a package.json file.

- What are some other popular package managers?
GitHub packages, Yarn, PNPM.

- How can you create a `package.json` with `npm`?
You can create a package.json file by running a CLI questionnaire or creating a default package.json file.

- What is a dependency and how do you add one to a package?
Packages required by your application in production.
You can add dependencies to a package.json file from the command line or by manually editing the package.json file.

- What happens when you add a dependency to a package with `npm`?
NPM will download dependencies and devDependencies that are listed in package.json that meet the semantic version requirements listed for each.

- What is a devDependency and how do you add one to a package?
Packages that are only needed for local development and testing.
To add an entry to the "devDependencies" attribute of a package.json file, on the command line, run the following command:
npm install <package-name> --save-dev

- How do you define and run `npm` scripts? Why are these useful?
You can define them in the package.json file, it allows you to type it into the command line more efficiently.


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
