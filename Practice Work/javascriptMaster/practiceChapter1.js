// 1.create a variable of type string and try to add  a number to it 


let a ="afride"
let b = 6
console.log(a+b)
// ---------------------------------------------------------
 
// 2 .use typeof oprator to find the datatype of the string in last question 

let a ="afride"
let b = 6
// console.log (typeof(a) ,typeof(b))
console.log (typeof(a) + typeof(b))
// ---------------------------------------------------------

// 3 .create a const object in javascript can you change it to hold a number a later 

const a = {
    name:"afride",
    phone:8995
}
a="mahesh"

// ----------------------------------------------

// 4 .Try to add a new key to the const object in the problem 3 were you abl to do it ?

const a = {
    name:"afride",
    phone:8995
}
a['friend']="mahesh"
a['name']="mahesh"

console.log(a);

// .............................................


// 5 . Write a javascript program to create a word -meaning distionary of 5 words


const distionary={
    quarterly:"one produced  or occurring once every quarter of a year",
    aardvark:"aardvarjjjjjjjk",
    abdominal:"nothing"


}
// console.log(distionary.aardvark)
// 2nd type 
console.log(distionary['aardvark'])