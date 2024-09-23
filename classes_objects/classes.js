// class user{
//   constructor(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password
//   }

//   //inside class we need not to write the word function
//   encryptPassword(){
//     return `${this.password}abc`
//   }
//   userNameToCap(){
//     return `${this.username.toUpperCase()}`
//   }
//   userNameToLowerCase(){
//     return `${this.username.toLowerCase()}`
//   }
// }

// const sai=new user("Sai","sai.com",123)
// console.log(sai);
// console.log(sai.encryptPassword());
// console.log(sai.userNameToCap());
// console.log(sai.userNameToLowerCase());

function User1(username,email,password) {
  this.username=username;
  this.email=email;
  this.password=password
  
}
Object.prototype.encript=function() {
  return `${this.password}abcd`
}

Object.prototype.upperCase=function() {
  return `${this.username.toUpperCase()}`
}


const chintu=new User1("chintu","chintu.com",1234);
console.log(chintu);
console.log(chintu.encript());
console.log(chintu.upperCase());























