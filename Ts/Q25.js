
const customer=[{
name:"Laksh",
transaction:3000

},{
name:"Pranay",
transaction:5000
},
{
name:"Ashraf",
transaction:4000
},
{
name:"Rahul",
transaction:8000
}
]
function MostActiveCustomer(customer) {
    const max= Math.max(...customer.map((cust)=>cust.transaction));
    return customer.find(cust => cust.transaction === max);
}
console.log(MostActiveCustomer(customer));
