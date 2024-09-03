// for of 
//mostly used, and dont requried any specific decleration of iteration
const arr=[1,2,3,4,5,6,7,8,9]
for (const val of arr) {
    console.log(val);
}

const sentance="i am sai kumar";
for (const word of sentance) {
    if (word==" ") {
        continue
    }
    console.log(word);
}
//  const myobj={
//     game1:"cricket",
//     game2:"kabbadi"
//  }
//  for (const game of myobj) {
//     console.log(game);
    
//  }

//forof cant itratate the objects