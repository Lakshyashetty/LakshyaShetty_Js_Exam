const calculateInterest = (balance) => {
  const rate = 5;
  const interest = (balance * rate) / 100;

  return interest;
};
console.log(calculateInterest(58900));
