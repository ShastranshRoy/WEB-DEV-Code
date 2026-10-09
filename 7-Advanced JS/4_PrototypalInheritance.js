/*

Definition:

Prototypal inheritance is a JavaScript mechanism where an object can inherit properties and methods from another object through a hidden/internal link called the [[Prototype]].

*/

function Person(name, age){
    this.name = name;
    this.age = age;
    
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    
};

let Identity = new Person("Dudu", 25);
Identity.greet();