/*

Definition:

A closure is created when a function remembers and retains access to variables from its outer (lexical) scope, even after the outer function has finished executing.

Example:

*/

function outer(){
    let counter = 4;

    return function() {
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());
console.log(increment());
