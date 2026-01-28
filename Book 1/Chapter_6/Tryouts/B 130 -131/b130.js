//#1: Awesome Animals 

// We start with an array of animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// Loop through each animal in the array
for (var i = 0; i < animals.length; i++) {

    // Take the animal at position i
    // and add the word "Awesome " in front of it
    animals[i] = "Awesome " + animals[i];
}

// Print the final array
console.log(animals);


//What’s happening?
//i is the position number (0, 1, 2, 3)
//We replace each animal with "Awesome " + animal
//Same array, new values


//#2: Random String Generator 
// All letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Start with an empty string
var randomString = "";

// Keep adding letters until the string has 6 letters
while (randomString.length < 6) {

    // Get a random position from the alphabet
    var randomIndex = Math.floor(Math.random() * alphabet.length);

    // Add the random letter to the string
    randomString += alphabet[randomIndex];
}

// Print the random string
console.log(randomString);


//What’s happening?
//Math.random() picks something random
//We grab a random letter from alphabet
//+= adds the letter to the end of the string
//Loop stops when length is 6


//#3: h4ck3r sp34k 
// Original text
var input = "javascript is awesome";

// Empty string for the result
var output = "";

// Go through each letter in the input
for (var i = 0; i < input.length; i++) {

    var letter = input[i];

    // Replace letters with numbers
    if (letter === "a") {
        output += "4";
    } else if (letter === "e") {
        output += "3";
    } else if (letter === "i") {
        output += "1";
    } else if (letter === "o") {
        output += "0";
    } else {
        // Keep the letter the same
        output += letter;
    }
}

// Print the hacked text
console.log(output);