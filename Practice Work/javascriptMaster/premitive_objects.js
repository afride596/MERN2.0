// There are 7  premitivedataType in javascript 

// nnssbbu

// null,number,string,symbol boolean, bigint ,undefined 

let a =null ;
let b=345;
let c = true;
let d =BigInt("549")
//  d =BigInt("549")+BigInt("2")
let e ="afride"
let f= Symbol("i am a nice symbol")
// let g= undefined
let g // if not defined anything it also take as undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof d)







// object in javascripts 
// It is key value pair  
// it is non premitive dataType 

const item={
    afride:true,
    "ashwaq":false,
    "harish":56,
    "mahesh":undefined,
}
console.log(item["afride"]);

//quiz question 
// write a javascript program to store name ,phone number and marks of a student using object


let student ={
    "name" : "afride",
    "phoneNumber":8989955855,
    marks:{
        math:80,
        science:90,
        physics:100
    }
}
console.log(student.name)
console.log(student.phoneNumber)
console.log(student.marks.science)
