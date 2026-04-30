const interestRate=5;
function CalculatBonus(bonus) {
    salary=40000;
    console.log(salary+bonus);
    
}
class Account {
    id;
    name;
    salary;
    constructor(id,name,salary) {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    displayInfo(){
        console.log(this.id+":"+this.name+":"+this.salary);
        
    }
}
module.exports={interestRate,CalculatBonus,Account}