const { log } = require('console');
const {db,connectdb}=require('./db');
connectdb()
function CreateTable() {
    db.query("create table cust(id int ,name varchar(20),account decimal(10,2))",(err)=>{
if (err) {
    console.log(err);
    
}else{
    console.log("Table Created Successfully");
    
}

    })
}
// CreateTable();
function InsertData(id,name,account){
    const user={id,name,account};
    db.query("insert into cust set ?",user,(err)=>{
        if (err) {
           console.log(err);
            
        }else{
            console.log("Data Inserted Successfull..");
            
        }
    })
}
// InsertData(101,"Laksh",32000);
// InsertData(102,"Rahul",38000);
function UpdateData(id,account) {
    const upd=[account,id];
    db.query("update cust set account=? where id=?",upd,(err)=>{
         if (err) {
           console.log(err);
            
        }else{
            console.log("Data Updated Successfull..");
            
        }
    })
}
// UpdateData(102,30000);
function DeleteData(id) {
    const del=[id];
    db.query("delete from cust where  id=?",del,(err)=>{
         if (err) {
           console.log(err);
            
        }else{
            console.log("Data Deleted Successfull..");
            
        }
    })
}
// DeleteData(102);
function ShowData(){
db.query("select * from cust",(err,result)=>{
    if (err) {
        console.log(err);

    }else{
        console.log(result);
        
    }
})
}
ShowData()



