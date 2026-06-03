class CustomerSupport{
    name : string;
    employeeId : number;
    department : string;
    experience : string;

    constructor(name : string, employeeid : number, department : string, experiencce : string){
        this.name = name;
        this.employeeId = employeeid;
        this.department = department;
        this.experience =experiencce;
    }
    displayInfo():void {
        console.log(this.name + " " + this.employeeId + " " + this.department + " " + this.experience);
        
    }
}
let customer = new CustomerSupport("Yogesh", 101, "IT", "Yes");
customer.displayInfo();
