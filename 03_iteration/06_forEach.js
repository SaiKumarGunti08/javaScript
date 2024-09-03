/*
ForEach is mostly used on arrays it dosnt requried any iterations conditions 
it automatically dectates and runs the loop
just need to enter a callback function on it

we can also refere a function in a forEach loop 

The objects inside a array can be also iteratable
*/

const myArr=['sai','kumar','chinnu','chintu']

myArr.forEach((item) => {
    //console.log(item);
    
});

//foreach not only has one parameter it has value , index and entire array

myArr.forEach((item,index,arr) => {
    //console.log(item ,index ,arr);
    
});

function myFun(item) {
    //console.log(`these are names in my array : ${item} `);
    
}
//refering a function in foreach
myArr.forEach(myFun) 

//iterating the objects inside the array

const objArr=[{
    name:'sai kumar',
    qualification:'MCA'
},{
    name:'aparna',
    qualification:'MBA'
},{
    name:'chinni',
    qualification:'comming soon'
}

]
objArr.forEach((data)=>{
    console.log(`${data.name} and his/her Qualifacation is ${data.qualification}`);
    
})

//if we want give conditions and store it in a variable

const numbers=[1,2,3,4,5,6,7,8,9,10]
let NumberGraterThanFour=[]
numbers.forEach( (num)=>{
    if(num>4){
        NumberGraterThanFour.push(num)
    }
} )

console.log(NumberGraterThanFour);

//but for simple and efficien manner is filter is used