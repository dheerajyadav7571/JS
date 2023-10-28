//we shoul avoid comparing different data type 
//js first change the data typ and then compare the value 

//until we compare same data type there will be no difficulty 
// console.log(2>1);
// console.log(2<1);
// console.log(2==1);

//null data type comparison
console.log(null>0);  // will result in false
console.log(null<0);  //will result in false
console.log(null>=0);  //will result in true ........because it first convert into ???
//Comparisons convert null to a number, treating it as 0 . That's why (3) null >= 0 is true and (1) null > 0 is false . On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don't equal anything else. That's why (2) null == 0 is false .
//strict check , check for the value as well as the data type without changing it into any.