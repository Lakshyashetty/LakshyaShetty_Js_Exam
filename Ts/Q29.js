function calculateServiceCharge(amt, rate = 6) {
  const charge = (amt * rate) / 100;
  return charge;
}
console.log(calculateServiceCharge(1000));