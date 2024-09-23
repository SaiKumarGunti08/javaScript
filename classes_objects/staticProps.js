//Props

//static keyword

class user{
  constructor(username){
    this.username=username;
  }
}
class Teacher extends user{
  constructor(username,email){
    super(username);
    this.email=email
  }
  subject(){
    return `${this.username} teaches js`
  }
  static presonalId(){
    console.log(`${this.username} personalId : 12345`);
  }
}

const sai=new Teacher("sai","sai@.com")
console.log(sai);
// sai.presonalId()
console.log(sai.subject());