interface TransactionSerivice{
    processTransaction():void;
}

class Tellerr implements TransactionSerivice{
    processTransaction(): void {
        console.log("Transaction service successfull");
        
    }
}
let tellerr = new Tellerr();
tellerr.processTransaction();