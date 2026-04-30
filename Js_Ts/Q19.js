class InvalidAccountException extends Error {
     constructor(message){
        super(message);
        this.name="AccountException";
    }
}

function AccName(acc){
    if(acc=="laksh24"){
    try {
        throw new InvalidAccountException(" Account  Found"+acc);
    } catch (error) {
        
        console.log(error.name+":"+error.message);
    }

    }
    else{
        console.log("Account Not  Found:");
        
    }
}

AccName("laksh240");