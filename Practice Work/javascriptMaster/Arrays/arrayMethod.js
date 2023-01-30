// Array Methods
// -----------------------------------------------------------------



// 1.toString():


// It just convert anydata type to string using toString() methods

// Example:
// let number =[1,2,3,4]
// let number =5&5
// let myNumber=number.toString()
// // console.log(typeof number)
// console.log(typeof myNumber)



// 2.join():
// It just joined all the array Elements using a separator 
// Example:
// let c=number.join("-")
// console.log(c, typeof c)



// 3.pop():

// It removes last Element from Array.And update the original array and retured the popped value
//  Example:
//  let number =[1,2,3,4]
//  let myNumber=number.pop()
//  console.log(number)
//  console.log(myNumber)


// 4.push():It added a new Element at the end of the Array .and modified the original array and return the new array length
//   Example:
//  let number =[1,2,3,4]
//  let myNumber=number.push(5)
//  console.log(number)
//  console.log(myNumber)

//  5.shift():It remove the first Element from array and return it 
// let R=number.shift()
// console.log(R)
// console.log(number)

// 6.unshift():It adds Element to beginning Return new array length 
// let un=number.unshift(56)
// console.log(un,number);

// 7.delete:array element can be delete using delete operation
// let d=[7,8,9,10,11]
// delete d[0]
// console.log(d);

// 8.concat:it join two or more array to give a single array

// let a=[1,2,3,4,5,6,7,8,9]
// let b=[10,11,12,13,14,15,16,17,18,19]
// let c=[20,21,22,23,24,25,26,27,28,29]
// let newArray=a.concat(b,c)
// console.log(newArray);

// 9.sort:sort() method is used to sort an array alphabetically
// let d=[9,7,8]
// console.log(d.sort());

// 10.reverse:
//  let E =[10,11,12,13,14,15,16,17,18,19]
// E.reverse()
// console.log(E);

// 11.splice():splice can be used to add new iteam to an array
//  let F =[10,11,12,13,14,15,16,17,18,19]
//  console.log(F.splice(2,3,101,102,103)); //return the deleted iteam 
//  console.log(F); //Modified array

//  12.slice():Its just take small piece from pizza and that piece converted to pizza

// let G=[10,11,12,13,14,15,16,17,18,19]
// console.log(G.slice(2,4));
// console.log(G);
