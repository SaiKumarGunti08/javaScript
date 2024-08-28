//immediately invoked function expression (IIFE)
/* 
Q: the use of iffe
A:It immidately exitutes the functions and also avoid the pollution from global scope variables
(function declared)()
*/

(function iifeFun() {  //its a named iife 
    console.log("DB exicuted");
    
})();//ending with ; is important because it continus exicution and shows error if another function is declared after that.
 // can be written in arrow function too

( ()=>{
    console.log('i am sai');
    
} )(); //next function doesnt exicutes because there is no ; semucolon

// (function sai() {
//     console.log('db declared');
// })()

//giving paramaters and arguments
( (name)=>{
    console.log(`my name is : ${name}`);
    
} )("sai");//argument is giver hear
