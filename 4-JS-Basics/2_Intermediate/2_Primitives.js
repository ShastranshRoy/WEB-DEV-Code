// Numbers

let balance = 500;
let anotherBalance = new Number(140);       // creates a number object instead of just number

console.log(balance);                       // Prints 500 as output
console.log(typeof(balance));               // gives the datatype of the variable -> balance which is number
console.log(anotherBalance.valueOf());      // Gives 140 as output
console.log(typeof(anotherBalance));        // gives the datatype as Object


// Boolean

let isActive = true;
let isreallyActive = new Boolean(false);        // not a recommended way of initializing


// NULL and Undefined

let firstName;
console.log(firstName);         // output will be undefined as variable is initiated but not defined

let lastName = null;
console.log(lastName);          // output will be null as we have defined that it is null value


// String

let greet = "Hello";
let anotherGreet = 'Hola';
let username = 'BUBU'

let oldMethod = greet + " " + "DUDU";             // This is painful method, better use Backtick
console.log(oldMethod);


let newMethod = `Hello ${username}!`;             // easy to inject variable as well as the additional subjects
console.log(newMethod);


// Symbol

// NOTE: Always create a new memory space and is always unique attribute even when you declare the same value

let sm1 = Symbol("Dudu");
let sm2 = Symbol("Dudu");

console.log(sm1 == sm2);            // output -> false, because it always creates a unique attribute.






