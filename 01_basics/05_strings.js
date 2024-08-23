/*
Topic disscussed 
strings different string methods and functions 
string, NEW String,indexOf(),slice(),trim()-(trimStart,trimEnd),substring(),charAt(),toUpperCase(),toLowerCase(),length, Replace(),includes(),split()
*/

const firstName="Sai"
const lastName="kumar"
const splitt="s-a-i"

console.log(firstName);
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(2));
console.log(firstName.indexOf("i"));
console.log(firstName.substring(0,2));
console.log(lastName.slice(-4,5));// can also give negative values to start from backside (5 is range of next values )
console.log(firstName.slice(0,2));
console.log(firstName[0,2]); //only shown i 
console.log(firstName.replace("a","AA"));
console.log(firstName.includes("i")); // to find any data is included or not
console.log(splitt.split("-")); // used to split the data and turn the string in the data to an array






const first_Name="  Sai"

console.log(first_Name.trim()); //trimStart(),trimEnd()

console.log(`first name is ${firstName} and last name is ${lastName} FullName is "${firstName} ${lastName}"`); // new method of joining string

const gameName=new String('Cricket'); //by adding (new String) methods can be shown and its a objets
console.log(gameName);
console.log(gameName.blink());
console.log(gameName.bold());

console.log(gameName.__proto__);
