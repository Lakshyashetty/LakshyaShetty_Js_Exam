interface TransactionService{
    processTransaction(isavailable:boolean):string
}
class Teler implements TransactionService{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    processTransaction(isavailable: boolean): string {
        if (isavailable) {
            return this.name+":Present";
        }else{
            return this.name+":Absent";
        }
    }
}
const st3=new Teller("Laksh");
console.log(st3.processTransaction(true));
