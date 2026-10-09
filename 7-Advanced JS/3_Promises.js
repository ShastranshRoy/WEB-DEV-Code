/*
Definition:

A Promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation and its resulting value.

In simple words:

A Promise is a placeholder for a value that you don't have right now but will get in the future.

For example, when you make an API request, you don't immediately know whether the server will return the data. A Promise represents that future result.

             Promise
                |
       ┌────────┴────────┐
       ↓                 ↓
   Pending           Settled
                       |
                ┌──────┴──────┐
                ↓             ↓
            Fulfilled      Rejected
             (success)      (failure)

Pending → Operation is still in progress.
Fulfilled → Operation completed successfully.
Rejected → Operation failed.

*/

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            let success = true;
            if(success == true) {
                resolve("Data fetched successfully");
            }
            else {
                reject("Error while fetching data");
            }
        }, 3000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
        return `Dudu`;   
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => console.log(error));