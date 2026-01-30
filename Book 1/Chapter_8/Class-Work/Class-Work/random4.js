//Option 2 
var generateRandomInsult = function () {
   var randomBodyParts = ["Face", "Nose", "Hair"];
   var randomAdjectives = ["Smelly", "Boring", "Stupid"];
   var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

   // Pick random items directly without helper function
   var bodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
   var adjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
   var word = randomWords[Math.floor(Math.random() * randomWords.length)];

   return "Your " + bodyPart + " is like a " + adjective + " " + word + "!!!";
};

console.log(generateRandomInsult());

//Option 3
function generateRandomInsult() {
   var randomBodyParts = ["Face", "Nose", "Hair"];
   var randomAdjectives = ["Smelly", "Boring", "Stupid"];
   var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

   return "Your " + 
          randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)] + 
          " is like a " + 
          randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)] + 
          " " + 
          randomWords[Math.floor(Math.random() * randomWords.length)] + 
          "!!!";
};

console.log(generateRandomInsult());