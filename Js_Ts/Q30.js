const totalTransaction = (...amounts) =>
  amounts.reduce((sum, amount) => sum + amount, 0);
console.log(totalTransaction(4000,6000));
