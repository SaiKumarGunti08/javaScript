const clock=document.getElementById('clock')

setInterval(()=>{
    const Time=new Date()
    clock.innerText=Time.toLocaleTimeString()
},1000)