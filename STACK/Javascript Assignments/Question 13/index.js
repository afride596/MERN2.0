// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let user = prompt("Enter your age:");
let b = document.querySelector(".se");
if (user >= 18) {
  setTimeout(function a() {
    b.innerHTML = "you are enough to drive a car";
  },2000);
  // console.log("you are enough to drive a car")
} else {
    setTimeout(function a() {
        b.innerHTML = "you are not enough to drive a car at below 18";
      },1000);
//  
}
