//getter and setter using function

function user(email,password) {
  this._email=email;
  this._password=password

  Object.defineProperty(this,'email',{
    get:function() {
      return this._email.toUpperCase()
    }
  ,
  set:function(value){
    this._email=value
  }
  })
  Object.defineProperty(this,'password',{
    get:function(){
      let value=this._password.toString()
      console.log(typeof value);
      return value
    },
    set:function(value){
      this._password=value
    }
  })
  
}
const f1=new user("sai@.com",111111)
console.log(f1);
console.log(f1.email);
console.log(f1.password);



//object based getters and setters

