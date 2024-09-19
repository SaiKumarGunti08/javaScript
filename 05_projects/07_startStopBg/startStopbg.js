
const randomColorFun=function(){
    hexCode='1234567890ABCDEF';
    let color='#'
    for (let i = 0; i <6; i++) {
        color+=hexCode[(Math.floor(Math.random()*16))]  
    }
    return color;
}

let intervals;
const startChange=function() {
    if (!intervals) {
        intervals=setInterval(()=>{
            document.body.style.backgroundColor=randomColorFun()
        },1000)   
    }
    
    
}
const stopChange=function () {
    clearInterval(intervals)
    intervals=null
}
document.querySelector('#start').addEventListener('click',startChange)
document.querySelector('#stop').addEventListener('click',stopChange)