// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arr = ["chatgpt", "pw skills", "twitter", "discord", "instagram", "pw skills", "linkedin"];
let lastOccurrence=arr.lastIndexOf("pw skills");

let firstOccurrence=(arr.length-1)-arr.reverse().lastIndexOf("pw skills")

let output=`the first occurence of pwskill at index ${firstOccurrence}
the last occurence of pwsskill at index ${lastOccurrence}`

console.log(output);