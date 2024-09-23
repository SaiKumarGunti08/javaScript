//the process of observing the functions and functionalities of of one class or object etc to another

const teacher={
  makVideo:"thacher is making video"
}

const TStaff={
  isAvaliable:false,
  attendance:"present"
}

const TA={
  makingAssignment:'js',
  //__proto__: TStaff
}


//TStaff.__proto__=teacher

//old method of inherantance or exchange of info


//modern method : syntax

Object.setPrototypeOf(TA,TStaff)
Object.setPrototypeOf(TStaff,teacher)

console.log(TA.attendance);
console.log(TStaff.makVideo);
console.log(TA.makVideo);
console.log(TA);


//Inherantance in classes

class user{
  constructor(username){
    this.username=username
  }
  logMe(){
    return `User loggedIn : ${this.username}`;
  }

}


const sai=new user("sai")
console.log(sai);
console.log(sai.logMe());

class Teacher extends user{
  constructor(username,email,password){
    super(username)         //super is used to set or inherate (similar to call)
    this.email=email;
    this.password=password
  }
  myCourse(){
    console.log(`${this.username} teaches js`);
  }
}

const chintu= new Teacher("chintu","chintu.com",121313)
console.log(chintu);
console.log(chintu.logMe());
console.log(chintu.myCourse());
chintu.myCourse() //when console.log is present in the function or method (undefined will not appere)

// to check the instance 

console.log(sai===chintu);

console.log(sai instanceof user);
console.log(sai instanceof Teacher);
console.log(chintu instanceof Teacher);
console.log(chintu instanceof user);









