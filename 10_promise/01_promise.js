/* 
promise() :- promises are used to exicute a task or a event after a perticular time or after a condition

promises are created or consumed

syntax 
create ;- const promisevar=new promise(function(resleve,reject){})
consume :- promisevar.this(function(){}). catch(function(){})

*/

//m-1
const promiseOne=new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log('promiseOne completed');
        reslove()
    },1000)
})
promiseOne.then(function(){
    console.log('p1 consumed');
    
})
//m-2
new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log('promise two completed');
        reslove()
    },1000)
}).then(function() {
    console.log('p2 consumed');
    
})

//taking data from reslove()  [ it may be object array string etc ]

const promisethree=new Promise(function(reslove,reject) {
    setTimeout(function() {
        console.log('p3 completed');
        reslove({username:'sai',id:1111})
    },1000)
})
promisethree.then(function(user) {
    console.log(user);
    console.log(user.username);
    console.log('p3 task completed');
})

//or m-2 chaining when returned (how to access the returned value) this method is used when value is returned 

const promiseFour=new Promise(function(reslove,reject) {
    setTimeout(function() {
        console.log('p4 completed');
        reslove({username:'chintu',id:11})
    },1000)
})
promiseFour.then(function(user) {
    console.log(user);
    return user.username
}).then(function(username) {
    console.log(username); 
})

//example 2 using reslove and reject (then() catch() finally() )

const promiseFive=new Promise(function(reslove,reject) {
    setTimeout(() => {
        let error=false
        if(!error){
            reslove({name:'Aparna',id:24})  
        }else{
            reject('ERROR : something went Wrong')
        }
    },1000);
})
promiseFive.then(function(wife) {
    console.log(wife);
    console.log(`saikumar's wife name is ${wife.name}`);
    
}).catch(function(error) {
    console.log(error);
    
}).finally(function() {
    console.log('promise is resloved or rejected'); //finally() is exicuted at any cost even resloved or rejected 
    
})

//async and awit method

const promiseSix= new Promise(function(reslove,reject) {
    setTimeout(() => {
        let error=true
        if(!error){
            reslove({name:'Aparna0810',id:24})  
        }else{
            reject('ERROR : something went Wrong')
        }
    },1000);
});

                                        //async awit doesnt handle errors
async function consumePromiseSix(){
    // const responsee = await promiseSix
    // console.log(responsee);
    // console.log('last');

    try {
        const reslovee= await promiseSix
        console.log(reslovee);
        
    } catch (error) {
        console.log(error);
        
    }   
}  
consumePromiseSix()

// async function getAllData() {
//     try {
//         const dataUrl= await(await fetch('https://randomuser.me/api/')).json()
//         console.log(dataUrl);
        
        
//     } catch (error) {
//         console.log('E:',error);
        
//     }
// }
// getAllData()

fetch('https://randomuser.me/api/').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log("error of data",error);
    
})


/*
fetch in depth
                      fetch('somthing') 
                          /      \
                         /        \
data is directly-------data        web browser/ node evn
not accessable           |                    |
                         |                    |
                on fullField[]               network request
                on rejection[]                    /      \
                                            success      fail

*/