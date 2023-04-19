/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  }
  const transaction = new Transaction('deposit', amount);
  this.transactions.push(transaction);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  }
  const transaction = new Transaction('withdrawal', amount);
  this.transactions.push(transaction);
  return true;
};

Account.prototype.getBalance = function (amount) {
  if (this.transactions.length === 0) {
    return 0;
  }
  let balance = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    const transaction = this.transactions[i];
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  }
  return balance;
};
