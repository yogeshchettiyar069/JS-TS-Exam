function recordUpdate(details){
    try{
        if(!details){
            throw ("record not updated");
        }else{
            console.log("record updated");
            
        }

    }catch(e){
        console.log(e);
        
    }finally{
        console.log("records accessed");
        
    }
}

recordUpdate(false);