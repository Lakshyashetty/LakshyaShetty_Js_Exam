"use strict";
class Account {
    accountId;
    accountHolderName;
    balance;
    constructor(accountId, accountHolderName, balance) {
        this.accountId = accountId;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
}
const b = new Account(101, "Laksh", 3200);
console.log(b);
