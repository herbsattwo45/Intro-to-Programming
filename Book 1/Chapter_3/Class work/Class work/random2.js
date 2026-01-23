
// Create a list (array) of words
var randomWords = ["Explosion", "Cave", "Princess", "Pen", "Bull", "Nose", "Mouse"];

// Generate a random number between 0 and 6
var randomIndex = Math.floor(Math.random() * 7);

// Print a random word from the list using the random number
console.log("random word:", randomWords[randomIndex]);


// Create a NEW list of words (this replaces the previous one)
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];

// Generate a random number based on how many words are in the list
var randomIndex = Math.floor(Math.random() * randomWords.length);

// Print a random word from the new list
console.log("random word:", randomWords[randomIndex]);




// Print a title
console.log('\n', '--------Random Insult Generator--------');

// Arrays with words to choose from
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat", "dog"];

// Pick a random body part
var randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective
var randomAdjective =
  randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word
var randomWord =
  randomWords[Math.floor(Math.random() * randomWords.length)];

// Build the insult sentence
var randomInsult =
  "Your " + randomBodyPart + " is like a " +
  randomAdjective + " " + randomWord + "!!!";

// Show the insult
console.log(randomInsult);


