//Type conversion

//using Number(typeof score)
//string()

//let score="33"  //op=> number
let score=33    //op=> number
// let score="33abc" //. op=>NaN
//let score=true //or false  op=>o or 1
// let score=null    //   op=>0
// let score=undefined  //op=>NaN
// let value=Number(score) //converts to number
// let ctoS=String(score) //converts to string
// let ctoB=Boolean(score)
// console.log(ctoS)
// console.log(typeof ctoS);
// console.log(typeof value);
// console.log(score);
// console.log(typeof score);

// let value="" //empty_string=> false,"hshshsh"=>true
// let Bvalue=1 //1=>true,0=>false
// let cofvalue=Boolean(value)
// console.log(cofvalue)
// console.log(typeof cofvalue);

// console.log("1"+"1"); //op=11
// console.log("1"+1) //op=11 value string is included
// console.log(1+"1"); //op=11 value string is included
// console.log(1+1+"1"); //op=21 frst 2 added nd the string attached
// console.log("1"+1+1);//op=111 as string is first
// console.log("1"+(1+1)); //op=12 as ()=> values are taken first

// let num1,num2,num3
// num1=num2=num3=2+2;//not a good way of writing

// console.log(+true);//op=1 
// console.log(true+);//not accaptable

//assinging operators
// in postfix the value is first assigned (hear a=3 so first value assigned to b=3)
let a=3
let b=a++
console.log(`a:${a},b:${b}`)

// in prefix the value is first incressed nd then assigned (x=3 ,y=1+3=4, so y=4 x is incremented so last step x incressed to 4)
let x=3
let y=++x
console.log(`x:${x},y:${y}`)
