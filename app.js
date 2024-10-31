// Modules protects their variables and functions from leaking

require("./xyz")

const {x, calculateSum} = require("./sum");


console.log('Namaste JS')

calculateSum(1,3)
console.log(x)

// var a = 10;
// var b = 20;
// console.log(a+b);

// console.log(global);

// console.log(this); //empty object

// Object of global for all the plateform

// console.log(globalThis);