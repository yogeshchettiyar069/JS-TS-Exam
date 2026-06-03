function transaction(success){
    try{
        if(!success){
            throw ("Transaction failed")
        }else{
            console.log("transaction success");
            
        }
    }catch(err){
        console.log(err);
        
    }
}
try {
transaction("true")
}catch(e){
    console.log(e);
    
}