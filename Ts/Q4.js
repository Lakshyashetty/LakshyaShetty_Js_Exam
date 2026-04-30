"use strict";
class BankEmployee {
}
class Teller extends BankEmployee {
    salary;
    constructor(salary) {
        super();
        this.salary = salary;
    }
    getSalary() {
        return "Salary" + this.salary;
    }
    getRole() {
        return "Account";
    }
}
class Manager extends BankEmployee {
    salary;
    constructor(salary) {
        super();
        this.salary = salary;
    }
    getSalary() {
        return "Salary" + this.salary;
    }
    getRole() {
        return "role:Manager";
    }
}
const t = new Teller(2300);
console.log(t.getSalary());
console.log(t.getRole());
const m = new Manager(43000);
console.log(m.getSalary());
console.log(m.getRole());
