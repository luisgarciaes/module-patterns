let greeting =  'Hello from greet 5';

let greet = () => {
    console.log(greeting);
}

module.exports = { //only the object is exported
    greet: greet
}