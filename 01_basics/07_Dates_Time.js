//Dates

let MyDate=new Date()
console.log(MyDate);
// console.log(Date.now());

// console.log(MyDate.getDate());
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log((MyDate.toLocaleString()));

// //let MyCreatedDate=new Date(2023,1,23) //only Date
// //console.log(MyCreatedDate.toDateString());

// let MyCreatedDate=new Date(2023,1,23,4,22,57) //new Date("01-12-2024")          date with time
// console.log(MyCreatedDate.toLocaleString());


//--------------Time Stamps-----------

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(MyDate.getTime());
// //just remember
// // console.log(MyDate.getSeconds());
// // console.log(MyDate.getMinutes());
// // console.log(MyDate.getHours());
// // console.log(MyDate.getDay());
// // console.log(MyDate.getMonth()+1);

// console.log(Math.floor(Date.now()/1000)); // seconds
// console.log(Math.floor((Date.now()/1000)/60)); // min


let newDate=new Date()
console.log(newDate.toLocaleString("default",{
    weekday: "long",
    month:"long",
    year:"numeric"
}));






 