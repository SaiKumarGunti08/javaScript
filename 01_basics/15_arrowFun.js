 const fee={
    userName:"sai",
    rollNum:8,
    Attend: function() {
        console.log(`${this.userName}, Roll no: ${this.rollNum} paid the fee `);
    }
 }
 fee.Attend()
 fee.userName="chintu"
 fee.Attend()
 
 console.log(this);
 //this is used inside object
 
 //+++++++++++++++ Arrow function +++++++++++++
//m-1
const fun1=function(num1,num2) {
    console.log(num1+num2);    
}
fun1(2,1)
//m-2
const fun2=(num1,num2)=>(num1+num2)  //implesit return helps while returning the object
console.log(fun2(5,5));

const fun3=(num1,num2)=>{  //explite return
    return num1+num2
}
console.log(fun3(10,10));
