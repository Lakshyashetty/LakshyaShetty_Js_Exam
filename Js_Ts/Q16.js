function withdraw(balance, amount) {
  try {
   
    if (amount > balance) {
      throw new Error("Insufficient balance!");
    }

    console.log("Withdrawal successful");
    console.log("Remaining Balance:", balance - amount);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

withdraw(5000, 2000);  
