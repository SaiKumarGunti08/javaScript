//----Premative DataTypes------
//7 types=> strings, number, boolean, null, undefined, symbols,Bigint


let StringValue="String DataType";
let Numbervlaue=1233
let booleanValue=true//or false
let nullValue=null// shoun as saperate object
let undefinedValue;//its undefined 
//let BigintValue=1626278291271287278n //large number are Bigint

//below both are different Symbol()
const symbolsValue=Symbol("123")
const anothersymbolsValue=Symbol("123")
console.log(symbolsValue==anothersymbolsValue);


//---Reference(non-Premative DataTypes)-----
//Array,objects,functions

let ArrayValue=["11",123,true,1.2] //in array there can be different datatype values , its dataType shows as function

//anything inside {} is an object 

const objectValue={
    name:"sai",
    age:24
}

const MyFunction=function(){
    console.log("sai");
}

MyFunction() //calling a function

console.log(typeof ArrayValue); //try with all
