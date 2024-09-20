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
    },2000)
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
    },2000)
})
promiseFour.then(function(user) {
    console.log(user);
    return user.username
    
}).then(function(username) {
    console.log(username); 
})