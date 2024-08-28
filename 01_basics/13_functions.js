function MyName() {
    console.log("s");
    console.log("a");
    console.log("i");

}
// MyName //referance
// MyName() //exicute

function AddNum(num1,num2) {
    //console.log(num1+num2);
    // let result=num1+num2
    // return result
    return num1+num2 // after return no code is read and exicuted
}

const result=AddNum(2,3)
console.log(`result: ${result}`);


//A function using basic conditions.
function userLogIn(userName){  //function userLogIn(userName="sam"){ its a default value
    if(!userName){
        return "No user logged In"
    }
    return `${userName} Logged In`
}

console.log(userLogIn());

//Shopping Cart 
//rest eg:(...p1) is used to take multiple data into an array. 
// function calculateCartPrice(p1){
//function calculateCartPrice(val1,val2,...p1) {
function calculateCartPrice(...p1) {  //rest operator similar to spred; when used in paramets its a rest and used somewhere spread
        return p1      
}
   
console.log(calculateCartPrice(200,300,400,500,600));

//who to pass and use a object inside a function

const userObject={
    userName:"sai",
    price:1999
}
const userObj2={
    userName:"chintu",
    price:199
}

function user(anyobject) { //anyobject it helps to obtain the value of all the objects
    console.log(`userName is ${anyobject.userName} and price is ${anyobject.price}`);
    
}
user(userObject)
user(userObj2)
//another method not mostly used 
user({
    userName:"chinnu",
    price:200
})

//using array in object

const myNewArray=[100,200,300,400,500]

function ArrayFunction(getArray) {
    return getArray[1]
    //return getArray
}

console.log(ArrayFunction(myNewArray));
console.log(ArrayFunction([22,443,5445,33223,44]));

