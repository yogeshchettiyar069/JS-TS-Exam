function balance(count){
    try{
        if(count <= 0){
            throw ("Insufficient balance");
        }else{
            console.log("Withdraw success");
            
        }
    }catch(err){
        console.log(err);
        
    }
}
balance(0);