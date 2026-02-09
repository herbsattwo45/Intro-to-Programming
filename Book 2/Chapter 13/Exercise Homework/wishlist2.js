/*
  GET THE PRINT BUTTON
  We grab it using its ID
*/
let printButton = document.getElementById("printable");

/*
  When the button is clicked,
  run the printView function
*/
printButton.addEventListener("click", printView);

/*
  GET THE ADD BUTTON
*/
let addButton = document.getElementById("addIt");

/*
  When clicked,
  run addTheThing
*/
addButton.addEventListener("click", addTheThing);

/*
  This array will store all wishlist items
*/
let myList = [];

/*
  This is the <ul> where items will appear
*/
let myListArea = document.getElementById("wishList");

/*
  MAIN FUNCTION THAT RUNS
  WHEN "ADD IT!" IS CLICKED
*/
function addTheThing() {

    // Get the input box
    let theThing = document.getElementById("iWant");

    // Add the value to the list
    addToTheList(theThing);

    // Clear the input field
    resetInput(theThing);
}

/*
  ADDS A NEW ITEM TO THE ARRAY
  AND DISPLAYS IT ON THE PAGE
*/
function addToTheList(thingToAdd) {

    // Add input value to the array
    myList.push(thingToAdd.value);

    // Create a new <li> element
    let newListItem = document.createElement("li");

    // Put the text inside the <li>
    newListItem.innerHTML = myList[myList.length - 1];

    // Add <li> to the <ul>
    myListArea.appendChild(newListItem);
}

/*
  CLEARS THE INPUT FIELD
*/
function resetInput(inputToReset) {
    inputToReset.value = "";
}

/*
  PRINT VIEW FUNCTION
  SORTS AND PRINTS THE LIST
*/
function printView() {

    // Get main page container
    let listPage = document.getElementById("listPage");

    // Get the form area
    let formArea = document.getElementById("formArea");

    // Hide the form before printing
    formArea.style.display = "none";

    // Make sure print styles apply
    listPage.className = "print";

    // Clear the current list display
    myListArea.innerHTML = "";

    // Sort items alphabetically
    myList.sort();

    // Rebuild the list in sorted order
    for (let i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }

    // Open the browser print dialog
    window.print();
}
