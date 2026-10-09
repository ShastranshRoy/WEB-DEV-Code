/*

Four pillars of Object Oriented Programming:

1) Inheritance
2) Polymorphism
3) Abstraction
4) Encapsulation

*/

// Inheritance example

class Vehicle {

    constructor(maker, model){
        this.maker = maker;
        this.model = model;
    }

    // start() is a method where we don't need to explicitly call function because it's inside class

    start(){
        return `${this.model} is a car from ${this.maker}`;
    }
}

class Car extends Vehicle {

    constructor(maker, model, year, color){

        super(maker, model);                // Inherited from parent class
        this.year = year;
        this.color = color;
    }

    drive(){
        return `${this.maker}: This is an inheritance example`;
    }
}

let myCar = new Car("Range Rover", "Defender", 2030, "Black")
// console.log(myCar);
// console.log(myCar.drive());
// console.log(myCar.start());


// Encapsulation : is a simple concept of restricting direct access to data object.

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    withdrawal(amount) {
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return `₹ ${this.#balance}`;
    }
}

let account = new BankAccount();
account.deposit(10000);
// console.log(account.getBalance());
account.withdrawal(1000);
// console.log(account.getBalance());


// Abstraction : focuses on hiding internal implementation details and exposing only the essential features of an object to the user.

class CoffeeMachine {

    start(){
        return `machine has started`;
    }

    brewing (){
        return `brewing your coffee`;
    }

    pressStartButton (){
        let msg1 = this.start();
        let msg2 = this.brewing();

        return `${msg1} + ${msg2}`
    }
}

let myMachine = new CoffeeMachine();
//console.log(myMachine.start());
// console.log(myMachine.brewing());
// console.log(myMachine.pressStartButton());


// Polymorphism: poly means many morphism means way. In simple Many forms. a single function, method, or object can behave differently depending on the context or data it receives


class Bird {
    fly(){
        return `Flying...`;
    }
}

class Panda extends Bird{
    fly(){
        return `Mota can't fly....`
    }
}

let bird = new Bird();
let panda = new Panda();

// console.log(bird.fly());
// console.log(panda.fly());


// Static : Can only be used with the class, not even with object.

class Calculator {

    static add(a, b){
        return a+b;
    }
}

// let miniCal = newCalculator();
// console.log(miniCal.add(2, 3));      Will throw error as static keyword won't be executed with any object.


// console.log(Calculator.add(2,3));


// Getters and Setters : having more control by making it private

class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    // Getter
    get salary() {
        return this.#salary;
    }

    // Setter
    set salary(value) {
        if (value < 0) {
            console.log("Invalid salary");
        } else {
            this.#salary = value;
        }
    }
}

let emp = new Employee("Dudu", 50000);

console.log(emp.salary);  // 50000

emp.salary = 60000;       // Setter is called
console.log(emp.salary);  // 60000

emp.salary = -5000;       // Invalid salary

