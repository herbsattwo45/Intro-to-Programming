// This is the person's age
var age = 12;

// true means they ARE with an adult
// false would mean they are NOT with an adult
var accompanied = true;

// Check if the person is allowed to watch the movie
// age >= 13 → old enough by themselves
// accompanied === true → younger, but with an adult
var allowedIn = (age >= 13) || accompanied;

// Show the result
allowedIn; // true
