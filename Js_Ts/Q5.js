"use strict";
class Teller {
    name;
    constructor(name) {
        this.name = name;
    }
    processTransaction(isavailable) {
        if (isavailable) {
            return this.name + ":Present";
        }
        else {
            return this.name + ":Absent";
        }
    }
}
const st3 = new Teller("Laksh");
console.log(st3.processTransaction(true));
