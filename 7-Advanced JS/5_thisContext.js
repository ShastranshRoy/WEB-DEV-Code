const person = {
    name: "Dudu",

    greet() {
        console.log(`Hi, I am ${this.name}`);
        
    },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Bubu"});
boundGreet();


// Bind, Call and apply notes:

