// premitive dataType 

// number=2 to power 54
// BigInt 
// string=> ""
// Boolean=>True//false
// null=> standalone value 
// undefined=>
// symbol =>unique

//  non premitive data types 

// object

console.log(typeof "hitesh");
console.log(typeof Symbol);

// datatype conversion:

// 1. string to number
let score="33abc"
let value=Number(score)
// console.log(value);=>NaN 

console.log( typeof Number(score)) ;
// Boolean


// 1=>true 
// 0=>false
// "afride"=>True 
// ""=>false 

// 7 types :String ,Number,boolean,null,undefined,symbol ,BigInt

// referenceType(Non primitive)

// Array,Objects,Function 

const hero=["shaktiman","naagraj","doga"];
let myObj={
    name:"hitesh",
    age:45
}
const Function= ()=>{
    console.log("hello");
}