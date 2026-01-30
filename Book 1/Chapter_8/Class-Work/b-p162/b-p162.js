// This function checks if a name has at least 6 characters
var sixthLetter = function (name) {

  // If the name is shorter than 6 characters
  if (name.length < 6) {
    // Exit the function early and do nothing
    return;
  }

  // If the name is long enough, return the 6th letter
  // Remember: counting starts at 0, so 6th letter is index 5
  return "The sixth letter of your name is " + name[5] + ".";
};

// ---------------- TEST THE FUNCTION ----------------

// Call the function with your name and log the result
console.log(sixthLetter("Herbert"));
