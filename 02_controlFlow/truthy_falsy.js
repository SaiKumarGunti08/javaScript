//falsy values : false , 0 ,-0,BigInt On,Nan ,"",null,undefined
//truthy values : true , "0", "false",function(){},{},"  ",[]
//false=0=>op true,0=false op=> true , 

//to check array

const mail=[]
if (mail.length===0) {
    console.log("empty array");
}

//to check object

const email={}
if (Object.keys(email).length===0) {
    console.log("object is empty");
    
}

//nullish coalescing operator (??) : null, undefined

let val;
//val=5 ?? 10
//val=null ?? 10
//val=Undefined ?? 10
val=1 ?? 10 ?? 15
console.log(val);

//Teranary operator

//syntax: condition ? if  true statement : else or false statement

const ice="hot"
ice==="cool" ? console.log("ice is cool") : console.log("ice is not cool");

