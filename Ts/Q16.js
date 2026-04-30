function Accountcreation(balance) {
    try {
     if (balance<=4000) {
           console.log(" Can WithDaw Money");
            
    } else{
        console.log(" Insufficient Money");

    }  
    } catch (error) {
        console.log("Error"+error.message);
        
    }     
    
}
Accountcreation(6000);
 