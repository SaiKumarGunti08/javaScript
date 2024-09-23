function multipleOf5(num){
  return num*5
}

multipleOf5.power=2

console.log(multipleOf5(5));
console.log(multipleOf5.power);
console.log(multipleOf5.prototype);

//in js everything considered as an object in the end .
//even function is an object .
//we can also personally inject our function and functionalities 
//syntax:
//functionnamePresented.protptype.functionname=(){} 
//js in the back automatically serches for the prototype (map(),slice()...etc)
//these doesnt requried specificely werite protptype in it .(userName.prototype.map()-wrong   userName.map()-right)


function Player(score){
  this.score=score
  
}

Player.prototype.increment=function() {
  this.score++
  console.log(`the incressed score is ${this.score}`);
}

Player.prototype.printMe=function(){
  console.log(`the score is ${this.score}`);
}

const p1=new Player(200)
const p2=new Player(400)

p1.printMe()
p2.printMe()
p1.increment()