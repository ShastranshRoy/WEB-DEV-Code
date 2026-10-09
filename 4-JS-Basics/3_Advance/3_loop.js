// Loop walkthrough -> theory covered in video
// Basic coding questions practice

/*

Challenge 1 : Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.

Solution:

let sum = 0;
let i = 1;

while(i <= 5)
{
    sum += i;
    i++;
}
console.log(sum);



Challenge 2: Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.

Solution:

let i = 5;
let countdown = [];

while(i >= 1)
{
    countdown.push(i);
    i--;
}
console.log(countdown);



Challenge 3: Write a 'do while' loop that prompts a user to enter their favorite tea type untill they enter "stop".
Store each tea type in an array named 'teaCollection'.

Solution:

let teaCollection = [];
let tea;

do {
    tea = prompt(`Enter your favourite tea (type "stop" to finish)`)

    if(tea != "stop")
    {
        teaCollection.push(tea);
    }
    
} while (tea != "stop");

// It will not run here, will run only on browser as Node doesn't support prompt so we have to run this code on browser.



Challenge 4: 4.⁠ ⁠Write a ⁠ do while ⁠ loop that adds numbers from 1 to 3 and stores the result in a variable named ⁠ total ⁠.

Solution:

let total = 0;

let i = 1;

do {
    total += i;
    i++;
    
    
} while (i <= 3);

console.log(total);



Challenge 5: Write a 'for' loop that multiplies each element in the array [2,4,6] by 2 and stores the results in a new array named multipliedNumbers.

Solution:

let arr = [2, 4, 6]
let multipliedNumbers = [];

let n = arr.length;

for(let i=0; i < n; i++)
{
    multipliedNumbers.push(arr[i]*2);
}
console.log(multipliedNumbers);


*/

/*

Challenge 6: Write a 'for' loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named 'cityList'.

Solution:

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

let n = cities.length;

for(let i = 0; i < n; i++)
{
    cityList.push(cities[i]);
}
console.log(cities);

*/








