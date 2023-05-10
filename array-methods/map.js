const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const result = prices.map((x) => ({ price: x, salePrice: x / 2 }));
console.log(result);

const original = prices.map((x) => '$' + x);
console.log(original);
