// Async await

function customer(user){
    return new Promise((resolve,reject)=>{
        if(user){
            resolve([
                {
                    name:"laksh",
                    balance:35000
                },
                {
                    name:"rahul",
                    balance:20000
                },
                {
                    name:"Pranay",
                    balance:12000
                }
            ]);
        }
        else{
            reject("Not a user")
        }
    })
}

async function AccountDetail(){
    try {
        const data=await customer(true);
        if(data){
            console.log(data);
        }
    } catch (error) {
        console.log(error);
        
    }   
}
AccountDetail();