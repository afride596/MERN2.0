// ALlowed user to access course if he is:

// Logged in from email
// Logged in from google
// logged in from facebook

var email = false;
var facebook = false;
var google = false;

// more complex and length 

// if (email) {
//   console.log("Login Success");
// }

// if (google) {
//   console.log("login success");
// }

// if (facebook) {
//   console.log("login success");
// }


// more easy approch 

if (email||google||facebook) {
    console.log("login success");
    
}