// Get the button
let button = document.getElementById("makeStory");

// Run function when button is clicked
button.addEventListener("click", makeStory);

// Function that builds the story
function makeStory() {

    // Get user input values
    let adj = document.getElementById("adj").value;
    let noun = document.getElementById("noun").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;
    let animal = document.getElementById("animal").value;

    // Build the story sentence
    let storyText =
        "One " + adj + " day, the " + noun +
        " decided to " + verb +
        " in the " + place +
        " with a " + animal + ".";

    // Display the story
    document.getElementById("story").innerHTML = storyText;
}
