let username = {
    "first Name": "Dudu",
    isLoggedin: true,
    Email: "dudu@hotmail.com",

};

username.firstName = "Mr. Dudu";
username.lastName = "Roy";

// console.log(username);
// console.log(typeof(username));
// console.log(username.firstName);
// console.log(username["first Name"]);  // another way of printing when you have declared with space: "First Name"
// console.log(username.lastName);

// Built in objects

let today = new Date();
console.log(today.getDate());


// Array

let anotherUser = ["Bubu", "Tingu", "Motu", true];
for(let i=0;i<=3;i++)
{
    console.log(anotherUser[i]);
    
}


// Implicit conversion

console.log(1 + "1");               // Output -> 11 (assuming the number to be a string)
console.log("1" + 1);               // output -> 11 (assuming the number to be a string)

let isValue = true;
console.log(isValue + 1);           // Output -> 2 (JS consider true as 1 and false as 0, so 1 + 1 = 2)
console.log(Number(isValue));       // Output -> 1 (Because true is considered as 1)



let isValue1 = "2";          
console.log(Number(isValue1));               // Output -> 2 (String is converted into Number)
console.log(typeof Number(isValue1));        // Output -> Number


let isValue2 = "2abc";          
console.log(Number(isValue2));               // Output -> NaN (Not able to convert it into Number basically Not a number)
console.log(typeof Number(isValue2));       // Output -> Number


let isValue3 = "10hfue"
console.log(Number(isValue3));              // Output -> NaN
console.log(typeof Number(isValue3));       // output -> Number
console.log(Number(null));                  // output -> 0









