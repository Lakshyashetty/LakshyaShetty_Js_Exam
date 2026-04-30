const arr=[200,400,500,600,700];
const mapIntereset=arr.map(arr=>{
    return arr+(arr*10/100);
})
console.log(mapIntereset);

const filterBalance=arr.filter(arr=>{
    return arr>500;
})
console.log(filterBalance);

const reduceDeposit=arr.reduce((tot,arr)=>{
    return tot+=arr;
},0)
console.log(reduceDeposit);
