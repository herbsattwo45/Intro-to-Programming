// Lists of words to choose from
var bodyParts = ["Hair", "Face", "Nose"];
var adjectives = ["Smelly", "Weird", "Ugly"];
var animals = ["Dog", "Monkey", "Pig"];
var animalParts = ["tail", "ear", "nose"];

// Pick a random body part from the array
var bodyPart =
  bodyParts[Math.floor(Math.random() * bodyParts.length)];

// Pick a random adjective
var adjective =
  adjectives[Math.floor(Math.random() * adjectives.length)];

// Pick a random animal
var animal =
  animals[Math.floor(Math.random() * animals.length)];

// Pick a random animal body part
var animalPart =
  animalParts[Math.floor(Math.random() * animalParts.length)];

// Build the insult sentence using the + operator
// The + joins (concatenates) text and variables together
var insultPlus =
  "Your " + bodyPart + " is more " + adjective +
  " than a " + animal + "'s " + animalPart + ".";

// Print the insult to the console
console.log(insultPlus);
