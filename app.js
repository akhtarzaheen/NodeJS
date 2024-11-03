// Modules protects their variables and functions from leaking

const https = require("https");

const {multiplication, calculateSum}  = require("./calculate");

console.log('Namaste JS')



// console.log(https)

https.get("https://PROJECT_TOKEN.mockapi.io/users/1/tasks",(resp) => {
    console.log('Res=>',resp)
});

calculateSum(10,20);
multiplication(10,20);


// var a = 10;
// var b = 20;
// console.log(a+b);

// console.log(global);

// console.log(this); //empty object

// Object of global for all the plateform

// console.log(globalThis);