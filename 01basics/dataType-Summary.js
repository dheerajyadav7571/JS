/*basically there are two data type 
1. Primitive(value )
2. Non primitive(reference data type)
Primitive data type ;  save the data in stack 
String,
Number,
Boolean,
null,
undefined,
Symbol,
BigInt(use to declare big no or scientic data )// const partsPerMill=123456799377n;

Non-Primitive datatype(reference )  // save the data in heap 
Array,
objects and 
Functions  
*/
// let myName ="Dheeraj";
// let myfriend=myName;
// myfriend="Sahil";
// console.log(myName);
// console.log(myfriend);

//even when we declare a object its variable get stored in stack only but value get stored in the heap 

let userOne ={
    email:"userOne@gmail.com",
    upi:"user@ybl",
}
let userTwo=userOne;
userTwo.email="dheeraj@gmail.com";// it will not just change for user two but also user one because they both looking at a single address
userTwo.upi="User2@ybl"
console.log(userOne);
console.log(userTwo);

