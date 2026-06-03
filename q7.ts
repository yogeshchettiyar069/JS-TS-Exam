class Branch{
    branchName : string;
    branchCode : number;
    location : string;

    constructor(branchName : string, branchCode : number, location : string){
        this.branchName = branchName;
        this.branchCode =branchCode;
        this.location =location;
    }

}
let b = new Branch("SBI", 17810, "Borivali West");
console.log(b);

