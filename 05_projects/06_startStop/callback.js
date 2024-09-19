

// const start=()=>{
//     let changeHeading=document.querySelector('h1').innerHTML='welcome sai'
//     console.log(changeHeading);
// }
let interval;
const start=function(){
    interval=setInterval(()=>{
        console.log('Interval Started');
    },1000)
}
const stopp=function() {
    clearInterval(interval)
    console.log('interval stopped');
}
document.getElementById('but1').addEventListener('click',start)
document.getElementById('but2').addEventListener('click',stopp)
