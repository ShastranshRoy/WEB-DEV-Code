// Example 1

/*
document
    .getElementById("changeTextButton")
    .addEventListener('click', function () {
        let paragraph = document.getElementById("myParagraph");
        paragraph.textContent = "The paragraph is changed....magic";
    });
*/

// Example 2

/*

document
    .getElementById("highlightFirstCity")
    .addEventListener('click', function () {
        let citiesList = document.getElementById("citiesList");
        let hold = citiesList.children[2];
        hold.style.color = "red";
        hold.style.backgroundColor = "yellow";
    });

*/

// Example 3

/*
document
    .getElementById("changeOrder")
    .addEventListener('click', function () {
        let hold = document.getElementById("coffeeType");
        hold.textContent = "Expresso";
        hold.style.color = "pink";
        hold.style.padding = "5px";
        hold.style.border = "10px";
        
    });
*/

// Example 4

/*
document
    .getElementById("addNewItem")
    .addEventListener('click', function () {
        let hold = document.getElementById("shoppingList");
        let newList = document.createElement("li");

        newList.textContent = "Jameson";

        shoppingList.appendChild(newList);
        
    })

*/

// Example 5

/*
document
    .getElementById("removeLastTask")
    .addEventListener('click', function () {
        let deletionList = document.getElementById("taskList");
        let listDelete = deletionList.children[0];
        listDelete.remove();
        
    }) 
*/

// Example 6

/*

document
    .getElementById("clickMeButton")
    .addEventListener('click', function() {
        let hold = document.getElementById("example-6");
        let newList = document.createElement("h1");
        newList.textContent = "Welcome back";
        hold.appendChild(newList);

    })

*/

// Example 7

/*

document
    .getElementById("teaList")
    .addEventListener('click', function (event) {
        if(event.target && event.target.matches(".teaItem"))
        {
            alert(`You selected: ${event.target.textContent}`);
        }
    });

*/

// Example 8

/*
document
    .getElementById("feedbackForm")
    .addEventListener('click', function(event) {
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        let display = document.getElementById("feedbackDisplay");
        display.textContent = `Feedback is: ${feedback}`;
        display.style.color = "red";
    })
*/

// Example 9

document
    .addEventListener("DOMContentLoaded", function () {
        document.getElementById("domStatus").textContent = "DOM full loaded";
    })


// Example 10

document
    .getElementById("toggleHighlight")
    .addEventListener('click', function () {
        let hold = document.getElementById("descriptionText");
        //hold.classList.add("highlight");
        hold.style.color = "yellow";
    })