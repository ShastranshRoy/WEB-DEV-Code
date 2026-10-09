/*

Challenge 1: Declare an array name 'teaFlavors' that contains the strings "green tea", "black tea", and "oolong tea".
Access teh first element of the array and store it in a variable named 'firstTea'.

Solution:

let teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];

console.log(firstTea);



Challenge 2: Declare an array named 'cities' containing "London", "Tokyo", "Paris" and "New york".
Access teh third element in the array and store it in a variable name 'favoriteCity'.

Solution:

let cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];

console.log(favoriteCity);




Challenge 3: You have an array named 'teaTypes' containing "herbal tea", "white tea", and "masala chai".
Change the second element of the array to "Jasmine tea".

Solution:

let teaTypes = ["herbal tea", "white tea", "masala chai"];

let newtype = "Jasmine tea";

teaTypes[1] = newtype;

console.log(teaTypes);



Challenge 4: Declare an array named 'citiesVisited' conataining "Mumbai" and "Sydney".
Add "Berlin" to the array using the 'push' method.

Solution:

let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited.push("Berlin");

console.log(citiesVisited);



Challenge 5: You have an array named 'teaOrders' with "chai", "iced tea", "matcha", and "earl grey".
Remove the last element of the array using the 'pop' method and store it in a variable name 'lastOrder'

Solution:

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];

let lastOrder = teaOrders.pop("earl grey");

console.log(teaOrders);
console.log(lastOrder);



Challenge 6: You have an array named 'popularTeas' containing "green tea", "oolong tea", and "chai".
Create a soft copy of this arry named 'softCopyTeas'.

Solution:

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);



Challenge 7: You have an array named 'topCities' containing "Berlin", "Singapore", and "New York".
Create a hard copy of this arry named 'hardCopyCities'.

Solution:

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities];

topCities.pop();
console.log(hardCopyCities);
console.log(topCities);



Challenge 8: You have two arrays: 'europeanCities' containing "Paris" and "Rome", and 'asianCities' containing "Tokyo" and "Bangkok".
Merge these two arrays into a new array name 'worldCities'.

Solution:

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

// let worldCities = [...europeanCities, ...asianCities];     This is also a new way of merging two array

let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);



Challenge 9: You have an array name 'teaMenu' containing "masala chai", "oolong tea", "green tea", and "earl grey".
Find the length of the array and story it in a variable named 'menuLength'.

Solution:

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

console.log(menuLength);



Challenge 10: you have an array named ⁠ citybucketlist ⁠ containing "Kyoto", "London", "Cape Town", and "Vancouver"
check if "London" is in a array and store the result in a variable named ⁠ isLondonInList ⁠.

Solution:

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);


*/



































