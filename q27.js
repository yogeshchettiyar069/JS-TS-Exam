function transaction(success){
    return new Promise((resolve, reject) => {
        if(succcess){
            resolve("transaction success")
        }else{
            reject("transaction not success")
        }
    })
}

async function test(){
    try{
        const data = await transaction(false);
    if(data){
        console.log("data");
    }

    }catch(e){
        console.log(e.name + ": " + e.message);
        
    }
}
test(true);