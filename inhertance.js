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
