// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

// - 4 > 3 -->false
console.log(- 4 > 3);


// - 4 >= 3-->false
console.log(- 4 >= 3);


// - 4 < 3----->true
console.log(- 4 < 3);


// - 4 <= 3---->true
console.log( - 4 <= 3);


// - 4 == 4-------->false
console.log(- 4 == 3);


// - 4 === 4-------->false
console.log(- 4 === 4);


// - 4 != 4----->true
console.log(-4 != 4)


// - 4 !== 4------->true
console.log(- 4 !== 4)



// 4 != '4'------->false
console.log(4 != '4')


// - 4 == '4'------>false
console.log(- 4 =='4')


// - 4 === '4'-------->false
console.log(- 4 === '4')

// Find the length of python and jargon and make a falsy comparison statement.

let python="python"
console.log(python.length)
let jargon="jargon"
console.log(jargon.length)

if(python.length!=jargon.length){
    console.log("python is not equal to jorgon ");
}
else{
    console.log(`both ${python} and ${jargon} have same length so it is ${python.length}`);
}

