
//its a object literal where collections properties and methods.
const user={
  username:'sai',
  id:24,
  signedIn:true,

  getUserDetails : function(){
    console.log('got user details for db');
    console.log(`my name is : ${this.username}`);
    console.log(this);
  }
}
// console.log(user.id);
//console.log(user.getUserDetails());
// console.log(this);

//constructor Function
// new is a type of constructor in js by using this we can create multiple intance using single object.

function userDetails(username,userId,pass) {
  this.username=username;
  this.userId=userId
  this.pass=pass 
  
  return this //implisitly its default
}

const userOne=new userDetails('sai',8,24)
const usertwo=new userDetails('aparna',10,24)
console.log(userOne.constructor);
// console.log(usertwo);
// console.log(userOne.username);
// console.log(usertwo.username);

//constructor is a referance . maybe classes functons or objects etc