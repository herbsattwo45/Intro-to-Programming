// Make an array (a list of names)
var people = ["Teddy", "Cathy", "Bobby"];

// Show the array on the page
document.getElementById("people").innerHTML = people;

// Change the first name in the array
people[0] = "Georgie";

// Show the changed array
document.write("<br>Changed first name: " + people);

// Add a name to the END of the array
people.push("Paul");
document.write("<br>After push: " + people);

// Remove the LAST name from the array
var removed = people.pop();
document.write("<br>Removed name: " + removed);

// Show array after removing
document.write("<br>After pop: " + people);

// Add a name to the START of the array
people.unshift("Mary");
document.write("<br>After unshift: " + people);

// Remove the FIRST name from the array
var firstRemoved = people.shift();
document.write("<br>Removed first name: " + firstRemoved);

// Final array
document.write("<br>Final array: " + people);
