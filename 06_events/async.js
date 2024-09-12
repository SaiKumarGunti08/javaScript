
//setTimeout is exicuted after completing the time period
setTimeout(function(){
    console.log('1');
},2000)
setTimeout(()=>{
    console.log(2); 
},1000)

//taking variables referance 
const refer=function() {
    console.log('hello sai kumar');
}

setTimeout(refer,3000)

setTimeout(()=>{
    console.log('4'); 
},1000)
//setInterval():- exicutes the callback function everytime on given time period
// setInterval(function() {
//   console.log('iam sai');   
// },3000)

//changing heading after some time
//m-1
//setTimeout(()=>{document.querySelector('h1').innerHTML='Welcome'},5000)


//m-2
//taking variable(function inside a variable) as handler 
//stoping the chaneges by using clearTimer()

const changehead=()=>{document.querySelector('h1').innerHTML='Welcome'}
const letsStopped=setTimeout(changehead, 5000);

document.getElementById('stop').addEventListener('click',()=>{
    clearTimeout(letsStopped)
    console.log('stopped');
})
