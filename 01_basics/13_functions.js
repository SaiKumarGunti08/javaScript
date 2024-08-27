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

