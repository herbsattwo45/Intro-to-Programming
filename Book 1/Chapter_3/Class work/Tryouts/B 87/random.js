// Print a title
console.log('\n', '--------Random Insult Generator--------');

// Arrays with words
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat", "Dog"];

// Pick a random body part
var randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

// Pick a random adjective
var randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// Pick a random word
var randomWord =
  randomWords[Math.floor(Math.random() * randomWords.length)];

// Build the insult sentence using join
var randomInsult = [ "Your",randomBodyPart,"is","like","a", randomAdjective, randomWord + "!!!"].join(" ");

// Show the insult
console.log(randomInsult);
