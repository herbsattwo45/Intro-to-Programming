// This function makes a random insult
var generateRandomInsult = function () {

  // Lists of words we can choose from
  var bodyParts = ["Hair", "Face", "Nose"];
  var adjectives = ["Smelly", "Weird", "Ugly"];
  var animals = ["Dog", "Monkey", "Pig"];
  var animalParts = ["tail", "ear", "nose"];

  // Pick one random item from each list
  // Math.random() gives a random number
  // Math.floor() makes it a whole number
  var bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
  var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  var animal = animals[Math.floor(Math.random() * animals.length)];
  var animalPart = animalParts[Math.floor(Math.random() * animalParts.length)];

  // Put all the words together into one sentence
  return "Your " + bodyPart + " is more " + adjective +
         " than a " + animal + "'s " + animalPart + ".";
};

// Run the function and print the insult
console.log(generateRandomInsult());
