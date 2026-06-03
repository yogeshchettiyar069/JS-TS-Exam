class InvalidAccoutException extends Error{
    constructor(m){
        super(m);
        this.name = "InvalidAccountException";
    }
}
function checkValidity(accnumber){
    try{
        if(accnumber != 101){
            throw new InvalidAccoutException("account number not valid");
        }else{
            console.log("Valid Account");
            
        }
    }catch(e){
        console.log(e.name + " : " + e.message);
        

    }
}
checkValidity(101);