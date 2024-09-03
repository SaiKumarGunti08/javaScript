const arr1=[1,2,3,4,5,6,7,8,9,10]
const newArr=arr1.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=41)
console.log(newArr);
