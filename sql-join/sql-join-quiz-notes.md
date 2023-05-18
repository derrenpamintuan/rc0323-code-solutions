# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
 In two different tables, for example, table one is products (stores information about a product), and table two is suppliers (stores information about the suppliers of those products), the product table has its own “supplierId” column. That column specifically refers to values in the “supplierId” column of the supplier table. This is known as foreign key, so instead of putting all of the suppliers information for a product into the product row itself, there is just one column that links the “products” table to the “supplier” table.

- How do you join two SQL tables? (Provide at least two syntaxes.)
 Add a join clause in a select statement.

- How do you temporarily rename columns or tables in a SQL statement?
 Use alias column names in a select statement by using the “as” keyword.

- How do you create a one-to-many relationship between two tables?
 Have a foreign key in one table pointing to a primary key in another table, creates a one-to-many relationship between the two tables. The column names are not changed in the table themselves.

- How do you create a many-to-many relationship between two tables?
 Is modeled as introducing a 3rd “join table” that contains a foreign key to one of the tables and another foreign key to the other table.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
