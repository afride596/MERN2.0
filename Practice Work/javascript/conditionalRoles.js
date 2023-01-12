// create a application for the following role
// admin - get full access
// subadmin -gets access to create/delete courses
// testsprep -gets access to create/delete tests
// user - gets access to consume the content

// switch cases

var user = "testsprep";

switch (user) {
  case "admin":
    console.log("you get full access");

    break;

  case "subadmin":
    console.log("-gets access to create/delete courses ");
    break;
  case "testsprep":
    console.log("-gets access to create/delete tests ");
    break;
  case "user":
    console.log(
      "-gets gets access to consume the content to create/delete courses "
    );
    break;
}
