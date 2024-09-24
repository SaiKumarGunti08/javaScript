//defining getters and setters 
//using class 

class user{
  constructor(email,password){
    this.email=email;
    this.password=password
  }
  get email(){
    return this._email.toUpperCase()
  }
  set email(value){                          //setter are always given a value and does return it sets
    this._email=value

  }
  get password(){
    return this._password.toUpperCase()
  }
  set password(value){
    this._password=value
  }

}
const u1=new user("sai@.com",'aabb12')
console.log(u1)
console.log(u1.email);
console.log(u1.password);