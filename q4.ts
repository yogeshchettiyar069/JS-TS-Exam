abstract class BankEmployee{
    abstract getSalary():void;
    abstract getRole():void;
}

class Teller extends BankEmployee {
    getRole(): void {
        console.log("Role : Teller");
        
        
    }
    getSalary(): void {
        console.log("salary : 20000");
        
        
    }
}

class Manager extends BankEmployee{
    getRole(): void {
        console.log("Role : Manager");
        
        
    }
    getSalary(): void {
        console.log("Salary : 70000");
        
    }
}
let t = new Teller();
t.getRole();
t.getSalary();

let m = new Manager();
m.getRole();
m.getSalary();  