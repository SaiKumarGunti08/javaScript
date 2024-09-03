//map 
/*map takes the data as key and value pairs
map is an object
to set key and value use map.set(key,value)
map returns unique values and in the same order entered 
*/

const myMap=new Map()
myMap.set('ind','india')
myMap.set("pak","pakisthan")
myMap.set("chn","china")

console.log(myMap);

for (const /*key*/ [key,value] of myMap) {
    //console.log(key);
    console.log(key,'=>',value);    
}

//forof not works for objects 
// map is an object but it sets the key value pairs forIn is mostly used for object 