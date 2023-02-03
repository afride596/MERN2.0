let num=[1,2,3,4]

// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// For EachLoop

num.forEach((element)=>{
   console.log(element*element); 

})

// Array.from

let bike="shine"
console.log(typeof bike);

let char=Array.from(bike)
console.log( char);
console.log(typeof char);


// for ----of

for(let item of num){
   console.log(item);
}

//for___in

for(let i in num){
   console.log(num[i]);
}