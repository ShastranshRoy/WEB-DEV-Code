/*

1. Synchronous JavaScript

In synchronous execution, JavaScript runs code one line at a time. Each operation must finish before the next one starts.

*/

console.log("Start");

console.log("Processing...");

console.log("End");

/*

Output:

Start
Processing...
End

Here, JavaScript executes:

Line 1 → Line 2 → Line 3

If one operation takes a long time, it blocks the execution of everything after it.




2. Asynchronous JavaScript

In asynchronous execution, JavaScript can start a task and continue executing other code without waiting for that task to finish.
Javascript can't execute Network calls timeout functions on their own so they execute it with the help of browser,node etc. So in the meantime JS execute all other functions apart from function that browser executes.
That's why the execution doesn't happen in sequence manner.

A common example is setTimeout():

*/

console.log("Start");

setTimeout(() => {
    console.log("Processing...");
}, 2000);

console.log("End");


/*

Output:

Start
End
Processing...

Even though setTimeout() appears before "End", JavaScript doesn't wait 2 seconds. It schedules the callback and continues.

So the flow is roughly:

Start
   ↓
setTimeout() → scheduled
   ↓
End
   ↓
2 seconds later
   ↓
Processing...

*/