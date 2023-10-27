const accountId=1;
let accountEmail="dheerajyadav@gmail.com";
var accountPassword="12345"
accountCity="varanasi"
let accountState;
//accountId=2  //not allowed 


accountEmail="dk@gmail.com"
accountPassword="2121"
accountCity="noida"

/*
Prefer not to use var // because of issue in block scope and functional scope 
*/

//console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])