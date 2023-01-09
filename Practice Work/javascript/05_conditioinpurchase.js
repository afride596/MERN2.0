// user is only allowed to make a purchase where he is:
// LoggedIn
// email verified
// cardInfo

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn) {
//   console.log("Logged IN success");
//   if (isEmailVerified) {
//     console.log("Email is verified");
//     if (cardInfo) {
//       console.log("you can make a purchase");
//     }
//   }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");

}else{
    console.log("you are not allowed to do that");
}
