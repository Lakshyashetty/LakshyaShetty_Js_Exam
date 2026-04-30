const mysql2=require('mysql2');
const console = require('node:console');
const db=mysql2.createConnection({
host:"localhost",
user:"root",
password:"",
database:"employee_db"
});
function connectdb() {
    db.connect((err)=>{
        if (err) {
         console.log(err);
            
        }else{
            console.log("connection Successful");
            
        }
    });
}
connectdb()
module.exports={db,connectdb}