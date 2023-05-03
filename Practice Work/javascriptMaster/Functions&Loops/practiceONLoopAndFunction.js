// 1 write a program to print the marks of the student in object  using a loop

// example 1

// let cricket ={
//     yuvi:90,
//     virat:70,
//     dhoni:65,
//     tendulkar:45,
//     mrlpl:66,
//     jadeja:75
// }
// for(let i=0 ; i<Object.keys(cricket).length;i++){
//     console.log("The score for " + Object.keys(cricket)[i]+ " is " + cricket[Object.keys(cricket)[i]]);
// }
// ----------------------------------------------
// example 2

let marks={
    rohan:90,
    mahesh:56,
    pradeep:45,
    yeshwanth:96
}
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("the marks of " +Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
// }
// ------------------------------------------------------------------

// 2.write the program in  1 using for in loop
for(let key in marks){
    console.log(key);
    // console.log("the marks of " + key + marks[key]);
}
// ------------------------------------------------------------------

// 3 .write a program to print try again until the user entered correrct number

// let cn=5
// let i
// while( i!=cn){
//     i = prompt("enter the number")
//     console.log('TRY AGAIN')

// }
// console.log("you have enter the correct number")

// ------------------------------------------------------------

// 4. write a function for mean of numbers 

// const mean=(a,b,c,d)=>{
//     return (a+b+c+d)/4
// }
// console.log(mean(4,5,6,7))
