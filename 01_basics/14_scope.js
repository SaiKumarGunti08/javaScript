//SCOPE
//Global scope And Block scope
//here a and b are global scope there values will not go inside of any scope
// let a=10
// const b=20

// if(true){
//     //here a and b are block scope there values will not go outside of scope
//     let a=1
//     const b=2
//     console.log(`inner a: ${a} and b: ${b}`);
    
// }
// console.log(`outer a: ${a} and b: ${b}`);

// //flow of variables in nested scopes
// if(true){
//     let userName="sai"
//     if (userName==="sai") {
//         const userId=1234
//         console.log(`${userName}'s Id is ${userId}`);    
//     }
//     //console.log(userId); // it does not exicuted outside scope
// }
// //console.log(userName); // it does not exicuted outside scope

//nested scope unsing functions
//below inner scope function can access the value of outer scope functon 
//but outer function cannot access the value nd varibles of inner function

//lexical and clouser
function one() {
    const name_1="sai"
    function two() {
        const id_1=111111
        console.log(`name : ${name_1} and id : ${id_1}`);
        console.log(name_1);
    }
    //console.log(id_1);
     two()   
}
//console.log(name_1);
one()

// declaring a function
//m-1
console.log(first(10)) //even if function is exicuted before inititialization can be exicuted
function first(num) {
    return num+1
}
// console.log(first(10))

//m-2
//console.log(second(10)); // when is stored in a varaible it doesnt exicuted before initialization
const second=function(num) {
    return num-1
}
console.log(second(10));


//clouser
//in clouser when the function is returned then not only scope of the function is returned but total lexical scoping is returned

function outer() {
    let name='sai'
    function inner() {
        console.log(name);
    }
    return inner
}
outer()