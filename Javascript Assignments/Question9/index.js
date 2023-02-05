// Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

// 5 falsy Values in js 0,undefined null NaN ""
// falsye value are not exact flase when we are trying to convert them into Boolean it become false
// same in truthy true value  are not exactly  but when we are trying to convert them into Boolean then it become to true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(""));
// ---------------------------------------
if (0) {
  console.log("if block is executed");
} else {
  console.log("else block is executed");
}
// ---------------------------------------
if (undefined) {
  console.log("if block is executed");
} else {
  console.log("else block is executed");
}
// -------------------------------------
if (null) {
  console.log("if block is executed");
} else {
  console.log("else block is executed");
}
// =====---------------------==================================-----------------------------==========
console.log(Boolean(1));
console.log(Boolean("afride"));
console.log(Boolean({}));

if (1) {
  console.log("if block executed");
} else {
  console.log("else block executed");
}

if ("afride") {
  console.log("if block executed");
} else {
  console.log("else block executed");
}

if ({}) {
  console.log("if block executed");
} else {
  console.log("else block executed");
}
