function Person(name, age){
    this.name = name
    this.age = age
}

function Car(maker, model){
    this.maker = maker
    this.model = model
}

// new keyword is used to create new object. Without using new keyword we will get an error of undefined.

let myCar = new Car("Hyundai", "Venue");
console.log(myCar);

let myNewCar = new Car("Tata", "Harrier");
console.log(myNewCar);


function Tea(type){
    this.type = type;
    this.describe = function() {
        return `this is a cup of ${this.type}`;
    }
}

let teaVariety = new Tea("lemon tea");
console.log(teaVariety);                    // Will show the whole function including another function

console.log(teaVariety.describe());         // Targeting the inside function as whole function is stored in teavariety

// Way to use prototype method on a constructor function (Use Case: Used for prototype linking btw different files)

function Animal(species){
    this.species = species;
}

Animal.prototype.type = function() {
    return `${this.species} is a carnivorous animal`;
}

let Cowu = new Animal("Cow");
console.log(Cowu);
console.log(Cowu.type());

