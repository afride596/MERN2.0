// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const date= new Date();
// use the date object to do all  the things 

const year=date.getFullYear();
console.log(`The current year is ${year}`);

const month=date.getMonth();
console.log(`The current month is ${month+1}`);// in js months start form 0 to  11

const todayDate=date.getDate();
console.log(`The current date is ${todayDate}`);

const day=date.getDay();
console.log(`The current day is ${day}`);

const Hours=date.getHours;
console.log(`The current hour is ${Hours}`)

const minutes=date.getMinutes();
console.log(`The current dat is ${minutes}`);

const miliSecondsElapsed = date.getTime(); // getTime() method will return milliseconds elapsed from Jan 1, 1970
const secondsElapsed = miliSecondsElapsed / 1000;
console.log(`Number of  seconds elapsed from Jan 1, 1970 are ${secondsElapsed}`);