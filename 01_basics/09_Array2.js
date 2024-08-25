//Array 2nd Section
const Marvel_heros=["ironman","spiderMan","thor","hulk"]
const dc_heros=["BatMan","superMan","flash"]
const indian_heros=["bhirava","krish","shakthiMan"]

//to combine two arrays using Push,concat,spread operators
//push
// Marvel_heros.push(dc_heros)
// console.log(Marvel_heros); //push() adds a complete array as single value

//concat 
//create new variable and add all the values to it.

// const All_heros=Marvel_heros.concat(dc_heros,indian_heros) // we can add how many array we want.
// console.log(All_heros);

//spread()
//dose same work as concat in a simpler way

const all_heros_spred=[...Marvel_heros,...dc_heros,...indian_heros]
console.log(all_heros_spred);

//flat()
//to unwrap the array inside arrays as a new single array
const Arr1=[1,2,3,[4,5,[6,8],7,9],10,11]
console.log(Arr1.flat(Infinity));

console.log(Array.isArray(Arr1)) // to check array or not
console.log(Array.isArray("sai")); 

//from() operator / convert a data to array. (imp)
console.log(Array.from("saikumar")); //converts any data to array
console.log(Array.from({name:"sai"}));//here it prints empty object as keys or pairs not mentioned 

let a=100
let b=200
let c=300
console.log(Array.of(a,b,c));//of() operator create a new array from a set of elements







