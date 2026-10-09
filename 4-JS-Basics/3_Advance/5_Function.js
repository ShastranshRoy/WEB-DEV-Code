/*

Challenge 1: Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like "Making green tea" when called with "green tea".
Store the result in a variable named 'teaOrder'.


Solution:

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
console.log(teaOrder);



Challenge 2: Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for chai".
Call 'confirmOrder' from within 'orderTea' and return the result.

Solution:

function orderTea(teaType){
    
    function confirmOrder()
    {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}
let answer = orderTea("Chai");
console.log(answer);

*/

/*

Challenge 3: Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying their 'price' and 'quantity'.
Store the result in a variable named 'totalCost'.



const calculateTotal = (price, quantity) => {
    let Cost = (price * quantity);
    return Cost;
}

let totalCost = calculateTotal(50,4);
console.log(totalCost);

*/

/*

Challenge 4: Write a function named 'processTeaOrder' that takes another function 'makeTea', as a parameter and calls it with the argument "earl grey".
Return the result of calling 'makeTea'.

Solution:

function makeTea(teasTypes)
{
    return `Make tea: ${teasTypes}`;

}

function processTeaOrder(makeTea)
{
    return makeTea("earl grey");
}

let order = processTeaOrder(makeTea);
console.log(order);

*/

/*

Challenge 5: Write a fucntion named 'createTeaMaker' that returns another fucntion. The returned function should take one parameter, 'Teatype', and return a message like "Making green tea".
Store the returned function in a variable named 'teaMaker' and call it with "green tea".

*/

function createTeaMaker(name){
    return function(teaType){
        return `${name} Making ${teaType}`;
    }
}

let teaMaker = createTeaMaker("Bubu");
let result = teaMaker("green tea");
console.log(result);







