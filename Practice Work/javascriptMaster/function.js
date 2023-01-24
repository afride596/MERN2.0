// old syntax for function 




function oneplusAvg(x,y){
    return (x+y)
}
let a=1;
let b=3;
let c=3;


// latest syntax for function 
// 1 
const sum =(p,q) =>{
    return p +q
}

// 2

const hello =()=>{
    console.log("hey")
    return "hai";
}
// let v = hello();
// console.log(v)

// console.log("one plus Average of a and b is",oneplusAvg(a,b))
// console.log("b and c",oneplusAvg(b,c))  
// console.log("b and a",oneplusAvg(b,a))  
// console.log("b and a",sum(4,5))  

 let v = hello();
 console.log(v)