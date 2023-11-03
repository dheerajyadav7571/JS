//in JS string can be denoted by single quote or double quote
const name="dheeraj"
const repo=45;
// console.log(name+repo+"dheeraj")

//we should use back tick which allow us for interpolation or placeholder 
//backk tick is in the side of 1 not beside of enter pleasse take care .

// console.log(`hello my name is ${name} and my roll no is ${repo} `);

const gameName= new String('dheeraj')

// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('d'));
const newString=gameName.substring(0,3);//index 3 will not be included 
// console.log(newString);

const anotherString= gameName.slice(-0,4);
console.log(anotherString);