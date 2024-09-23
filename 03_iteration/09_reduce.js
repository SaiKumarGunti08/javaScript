const arr1=[1,2,3]
// const newArr=arr1.reduce( (acc,crval)=> (
//     console.log(`acc :- ${acc} and current Value :- ${crval}`),
//     acc+crval ,0))
// console.log(newArr);

//inside scope 

// const newArr=arr1.reduce( (acc,crval)=>{
//     console.log(`acc value = ${acc} and current value = ${crval}`);
//     return acc+crval
// },0)
// console.log(newArr);

//here acc is previous value
const newArr=arr1.reduce( (acc,crval)=>{
    //console.log(`acc value = ${acc} and current value = ${crval}`);
    return acc+crval
},2)
//console.log(newArr);




// const newArr=arr1.reduce( (acc,crval)=> acc+crval,0)
// console.log(newArr);


const shoppingCart=[{
    item:'mobile',
    price:19999
},
{
    item:'laptop',
    price:199999
},{
    item:'TV',
    price:99999
}]

const totalCartPrice=shoppingCart.reduce((acc,itemprice)=>(acc+itemprice.price),0)
console.log(totalCartPrice);
