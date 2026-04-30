class CustomerSupport {
    name;
    employeeId;
    department;
    constructor(name,employeeId,department) {
        this.name=name;
        this.employeeId=employeeId;
        this.department= department;
    }
    displayInfo(){
        console.log(this.name+":"+this.employeeId+":"+this.department);
        
    }
}
const b= new CustomerSupport("Laksh",101,"Techical");
b.displayInfo();
