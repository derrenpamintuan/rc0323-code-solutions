const books = [
  {
    isbn: '9780307275059, 0307275051',
    title: 'The Wisdom of Crowds',
    author: 'James Surowiecki'
  },
  {
    isbn: '9780307455611, 0307455610',
    title: 'The Great Man',
    author: 'Kate Christensen'
  },
  {
    isbn: '9781538724743, 153872474X',
    title: 'Verity',
    author: 'Colleen Hoover'
  }
];

console.log('books:', books);
console.log('type:', typeof books);

console.log('result:', JSON.stringify(books));
console.log('type:', typeof JSON.stringify(books));

const string = '{"id": "90745", "name": "Derren"}';

console.log('string:', string);
console.log('type:', typeof string);

console.log('result:', JSON.parse(string));
console.log('type:', typeof JSON.parse(string));
