// Modules protects their variables and functions from leaking

const {multiplication, calculateSum}  = require("./calculate");

console.log('Namaste JS')

calculateSum(10,20);
multiplication(10,20);

// var a = 10;
// var b = 20;
// console.log(a+b);

// console.log(global);

// console.log(this); //empty object

// Object of global for all the plateform

// console.log(globalThis);