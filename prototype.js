//createing your own prototype or methods 
// modern syntax: 
//object or string or name.prototype.functionname(){}


let name1='saikumar     '

String.prototype.trueLength=function(){
  console.log(`the true length of ${this} is : ${this.trim().length}`);
}
let n2="chintu   sai    "
let n3="sai kumar"

"aparna".trueLength()
name1.trueLength()
n2.trueLength()
n3.trueLength()

const user={
  username:"saiiiiiii     ",
  myid:11
}

const user1={
  username:"kumar     ",
  myid:11
}

Object.prototype.userName=function() {
  console.log(`my user name : ${this.username}`);
  console.log(`created own prototype for object`);
}

user1.userName()
user.userName()



