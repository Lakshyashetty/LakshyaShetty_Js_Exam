const { log } = require('console');
const {db,connectdb}=require('./db');
connectdb()
function CreateTable() {
    db.query("create table emp2(id int ,name varchar(20),salary decimal(10,2))",(err)=>{
if (err) {
    console.log(err);
    
}else{
    console.log("Table Created Successfully");
    
}

    })
}
// CreateTable();
function InsertData(id,name,salary){
    const user={id,name,salary};
    db.query("insert into emp2 set ?",user,(err)=>{
        if (err) {
           console.log(err);
            
        }else{
            console.log("Data Inserted Successfull..");
            
        }
    })
}
// InsertData(102,"Rahul",32000);
function UpdateData(id,salary) {
    const upd=[salary,id];
    db.query("update emp2 set salary=? where id=?",upd,(err)=>{
         if (err) {
           console.log(err);
            
        }else{
            console.log("Data Updated Successfull..");
            
        }
    })
}
// UpdateData(102,34000);
function DeleteData(id) {
    const del=[id];
    db.query("delete from emp2 where  id=?",del,(err)=>{
         if (err) {
           console.log(err);
            
        }else{
            console.log("Data Deleted Successfull..");
            
        }
    })
}
// DeleteData(102);
function ShowData(){
db.query("select * from emp2",(err,result)=>{
    if (err) {
        console.log(err);

    }else{
        console.log(result);
        
    }
})
}
ShowData()



