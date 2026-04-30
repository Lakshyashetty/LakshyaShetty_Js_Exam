abstract class BankEmployee{
     abstract getSalary():String;
   abstract  getRole():String;

}
class Teller extends BankEmployee {

salary:number;
    constructor(salary:number) {
        super()
       this.salary=salary
    }
    getSalary(): String {
        return  "Salary:"+this.salary;
    }
    getRole(): String {
        return  "Account"
    }

}
class Manager extends BankEmployee {
    salary:number;
    constructor(salary:number) {
        super();
       this.salary=salary 
    }
    getSalary():String{
return "Salary:"+this.salary;
    }
    getRole(): String {
        return "role:Manager"
    }  

}
const  t=new Teller(2300);
 console.log(t.getSalary());
 console.log( t.getRole());
const m=new Manager(43000);
 console.log(m.getSalary());
 console.log( m.getRole());

