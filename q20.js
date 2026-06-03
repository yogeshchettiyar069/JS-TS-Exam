function TransactionLimit(limit){
    try{
        if(limit > 10000){
            throw Error("Maximum limit reached");
        }else{
            console.log("transaction success...");

        }
    }catch(e){
        console.log(e.name + " " + e.message);
        
    }

}
TransactionLimit(11000);