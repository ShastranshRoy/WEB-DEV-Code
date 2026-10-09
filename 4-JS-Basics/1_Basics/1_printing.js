// Different ways to print

console.log("Hello");                       // Output will be Hello
console.log("World");                       // Output will be World      


process.stdout.write("Hello"); 
process.stdout.write("World");             // It gives combine output as HelloWorld


// Difference between these two print method is Console.log gives output line by line while process.stdout.write method gives combine output.


console.table([{city: "Muzaffarpur"}, {city: "Gulbarga"}])              // used for printing Table