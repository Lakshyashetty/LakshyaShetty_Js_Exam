function getAccountInfo<T>(info:T):T {
    return info;
}
console.log(getAccountInfo<number>(43000));
console.log(getAccountInfo<String>("AccountHolderName:Laksh"));

