//forIn
const Games={
    game1:"cricket",
    game2:'kabbadi',
    game3:'kho-kho',
    game4:'batmenton'
}

for (const keys in Games) {
    //console.log(keys); //only keys
    //console.log(Games[keys]); //only for values
    console.log(`${keys} and their value is : ${Games[keys]}`);
}

const myArr=['sai','kumar','chintu']

for (const key in myArr) {
    //console.log(`${key} => ${myArr[key]}`);
    
}

//forIn in map
//maps are not itratable 

const myMap=new Map()
myMap.set('ind','india')
myMap.set("pak","pakisthan")
myMap.set("chn","china")

console.log(myMap);

for (const key in myMap) {

    console.log(`${key} :- ${myMap[key]}`);
    
}
