function atm(money,server){
    if(!server){
        throw new Error("Server Down");
    }
    else{
        console.log("Transaction completed successfully");
        
    }
}

function buy(){
    atm(400,true);
}

function test(){
    try {
        buy()
    } catch (error) {
        console.log("Error:"+error.message);
        
    }
}

test()