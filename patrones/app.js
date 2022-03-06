//references to the exported functions
let greet = require('./greet1');
let greet2 = require('./greet2').greet;
let greet2a = require('./greet2');
const greet3 = require('./greet3');

greet();
greet2();
greet2a.greet() //this effectively does the same thing as the code above
console.log(greet3);
greet3.greet();