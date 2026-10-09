/*

Notes from theory explanation:

Javascript supports all Object Oriented operations but in the backend it is a prototype.

*/

// Proto is used to inherit all the properties from other object. In the above example Lenove acquired all the properties of 'computer' by using 'proto'. This is an old method

/*

let computer = {
    cpu : 4,
    RAM : 14,
};

let Lenovo = {
    screen: "HD",
    __proto__: computer,
};

let hardware = {};

console.log(`Lenovo has: ${Lenovo.screen} screen`, Lenovo.__proto__);

*/

// New method of prototyping

let genericCar = {
    tyres: 4,
    engine: 1,
};

let tesla = {
    driver: "AI",
    transmission: "Automatic",
};

Object.setPrototypeOf(tesla, genericCar);                 // Setting up Prototype link btw tesla and generic car

console.log(`Tesla properties:`, tesla);                 // Way to print tesla own property

console.log(`Tesla inherited properties from generic Car:`, Object.getPrototypeOf(tesla));      // Way to print tesla inherited property from genericCar

console.log(`Tesla properties combined:`, tesla, Object.getPrototypeOf(tesla));         // Way to print both properties combined



// hasOwnProperty - Gives boolean results whether the property is inherited or its own

console.log(tesla.hasOwnProperty("tyres"));
// Expected output: False
