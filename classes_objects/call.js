function setUserName(username) {
  this.username=username
  console.log("called");
}

function createUser(username,email,pass) {
  setUserName.call(this,username)

  this.email=email
  this.pass=pass
}

const user1=new createUser("sai","sai@gmail.com",123)
console.log(user1);