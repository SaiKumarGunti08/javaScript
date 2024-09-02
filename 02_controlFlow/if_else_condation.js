/*
if is a condition based statement 
syntax:
if(condition){
defenation
}
conditions could be based on (true or false,<,>,==,<=,>=,!= ,===,!== etc statements)
*/
// const temperature=41
// if (temperature<50) {
//     console.log("temperature is less than 50");   
// }
// console.log("temperature is 50");

//scope with condition
// const score=200
// if (score==200) {
//     const power="fly"
//     console.log(`the score is:${score} and power is ${power}`);  
// }
//console.log(`the score is:${score} and power is ${power}`); power is only valid inside the scope

// const balance=100
// //if (balance>500) console.log(`yes greater than 500 bal is ${balance}`), console.log("not greater"); //never recammanded

// if (balance>1000) {
//     console.log("greater than 1000");
    
// }else if(balance==1000){
//     console.log("balance is equals 1000");   
// }
// else{
//     console.log("less that 1000");
    
// }

// we can use multiple statements in one condition
const userLogIn=true
const debitCard=true
const loggedInFromEmail=true
const loggedInWithGoogle=false

if (userLogIn && debitCar /* && another condition statement*/) { // both the conditions shound be true
    console.log("userLogged in nd has debit Card");
}
if(loggedInFromEmail || loggedInWithGoogle){ //even if one condition is true then exicuted
    console.log("userlogged In ");
}