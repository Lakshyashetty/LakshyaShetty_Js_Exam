class Account {
    accountId:number;
    accountHolderName:String;
    balance:number;
    constructor(accountId:number,accountHolderName:String,balance:number) {
        this.accountId=accountId;
        this.accountHolderName=accountHolderName;
        this.balance=balance;
    }
}
const b =new Account(101,"Laksh",3200);
console.log(b);
