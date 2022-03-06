//references to the exported functions
let greet = require('./greet1');
let greet2 = require('./greet2').greet;
let greet2a = require('./greet2');
const{ greeting } = require('./greet3')
let greet3 = require('./greet3');

greet();
greet2();
greet2a.greet() //this effectively does the same thing as the code above

console.log(greet3);
greet3.greet();
greet3.greeting = 'Hello from the app'

let greet3b = require('./greet3');
greet3b.greet();//this demonstrates that greet3 is a reference in memory to the original, not an actual separate value

const Greet4 = require('./greet4');
let myGreet = new (Greet4)
myGreet.greet()//uses the imported constructor to create an object with the established properties

const greet5 =  require('./greet5');//only the established object is visible
greet5.greet();
console.log(greet5.greet)

