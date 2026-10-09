// operations precedence

let score = 2 * 3 + 2 - 1;          // Bad practice of writing code, we can use brackets
console.log(score);                 // output -> 7

let score1 = ((2 * (3 + 2)) - 1);
console.log(score1);                // output -> 9.  Because brackets decides the priority acc to BODMAS rule.
