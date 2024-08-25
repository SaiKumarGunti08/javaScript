//singleton
const app1=new Object()
app1.name="sai"
app1.email="sai@.com"
console.log(app1);

//nested object
const user={
    UserName:{
        fullName:{
            frstName:"sai",
            scndName:"kumar"
        }

    }
}

console.log(user.UserName.fullName.frstName);//for accessing the nested object

// for joining or merging the objects
const obj1={
    a:1,
    b:2,
    c:3}
const obj2={
    d:4,
    e:5,
    f:6
}
const obj3={obj1,obj2}//has a prblm objects are added 
console.log(obj3);

const obj4=Object.assign({},obj1,obj2)//assign()to merge the data into single object
console.log(obj4);
//mostly used object merging
const obj5={...obj1,...obj2}
console.log(obj5);

//keys and values 
//these are stored in a array
console.log(Object.keys(app1)); 
console.log(Object.values(app1));
console.log(Object.entries(app1));//forms a array of each key value pairs


console.log(app1.hasOwnProperty("name"));

//object class 3

//Destructring

const course={
    instructor:"sai",
    subject:"js"
}
const {instructor}=course//=> here course is object {}=> in this values that are destructured