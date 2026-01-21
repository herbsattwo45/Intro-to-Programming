// NOT (!) operator
// isWeekend is true (yes, it is the weekend)
var isWeekend = true;

// ! means "the opposite of"
// The opposite of true is false
var needToShowerToday = !isWeekend;

// So this becomes false
needToShowerToday;


// Joining strings together
// These are just words stored in variables
var greeting = "Hello";
var myName = "Nick";

// Putting the two words together
// JavaScript does NOT add a space for you
// Result is "HelloNick"
greeting + myName;


// Finding how long a string is
// Counts every character
"Helloworld".length; // Result: 10


// Getting ONE letter from a word
var myName = "Nick";

// Counting starts at 0, not 1
// 0 = N, 1 = i, 2 = c, 3 = k
myName[1]; // Result: "i"


// Numbers and math
// JavaScript follows math rules (multiply and divide first)
1234 + 57 * 3 - 31 / 4;
// Result: 1397.25


// Increasing a number by 1
var highFives = 0;

// ++ means "add 1"
++highFives; // highFives is now 1


// Decreasing a number by 1
var highFives = 5;

// -- means "take away 1"
--highFives; // highFives is now 4


// AND (&&) operator
// BOTH sides must be true
var isRaining = true;
var isNotRaining = false;

// true AND false = false
isRaining && isNotRaining;


// OR (||) operator
// Only ONE side needs to be true
var hasApple = true;
var hasBanana = false;

// true OR false = true
hasApple || hasBanana;


// Comparing numbers
var height = 65;
var heightRestriction = 60;

// Is 65 smaller than 60?
// No → false
height < heightRestriction;


// Making text ALL CAPS
"Hello there, how are you doing?".toUpperCase();
// Result: "HELLO THERE, HOW ARE YOU DOING?"


// Making text all lowercase
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();
// Result: "hello there, how are you doing?"


// Strict equals (===)
// Checks VALUE and TYPE
var mySecretNumber = 5;
var chicoGuess = 3;

// 5 is not the same as 3
mySecretNumber === chicoGuess; // false


// Double equals (==)
// Converts before comparing (can be risky)
var stringNumber = "5"; // this is text
var actualNumber = 5;  // this is a number

// JavaScript turns "5" into 5
stringNumber == actualNumber; // true


// slice()
// Cuts out part of a string
// First number = start
// Second number = stop (not included)

// Example 1:
"This is a long string".slice(0, 4);
// Takes characters 0 to 3
// Result: "This"

// Example 2:
"Hello, World!".slice(7, 12);
// Takes "World"
// Result: "World"
