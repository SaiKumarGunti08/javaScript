//singleton
//object.create //another method to create an object 

//object literals //one type
const sym1=Symbol("key1")
const obj1={ //object creation
name:"sai",
"full name":"saikumar",
age:24,
email:"saikumar.gunti8@gmail.com",
//sym1:"key1",   //value is accepted but does nt shown as symbol
[sym1]:"key1",   //now is shows as symbol
location:"hyd",
logIn:false,
latsLogIn:["monday","wednesday","saturday"],
fun1:function(){
    console.log("hello sai");
    
}
}

//access the data of object 
console.log(obj1.name); //m-1 mostly used 
console.log(obj1["name"]); //on special cases
console.log(obj1["full name"]);//m-2
console.log(obj1[sym1]);
console.log(obj1["latsLogIn"]);
//Object.freeze(obj1) // freeze the complete object and data cannot be chabged
console.log(obj1.email);

obj1.email="chintusai@ggaha"
obj1.name="chintu"
console.log(obj1.email);
console.log(obj1.name);
console.log(obj1["fun1"]);

//unfreeze the object for making changes
// we can also declare a function inside an object // add as greetings

obj1.greeting=function(){
    console.log("hello chintu sai");
}
obj1.greetingTwo=function(){
    console.log(`hello user ,${this["full name"]}`); //this is used to access the data
}
console.log(obj1.greeting());
console.log(obj1.greetingTwo());










