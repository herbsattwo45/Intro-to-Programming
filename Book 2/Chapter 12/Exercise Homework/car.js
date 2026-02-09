// ----------------------------
// VARIABLES
// ----------------------------

// Speed of the car animation (lower number = faster movement)
var carSpeed = 250;

// Current horizontal position of the car (in pixels)
var carPosition = 0;

// Variable to store the interval that moves the car
var animation;

// ----------------------------
// SELECT ELEMENTS FROM HTML
// ----------------------------

// Get the car image element from the page
var car = document.getElementById("car");

// Get the Stop button element
var stopButton = document.getElementById("stopButton");

// ----------------------------
// EVENT LISTENERS
// ----------------------------

// When the car is clicked, call the speedUp function
car.addEventListener("click", speedUp);

// When the stop button is clicked, call the stopCar function
stopButton.addEventListener("click", stopCar);

// ----------------------------
// FUNCTIONS
// ----------------------------

// Function to make the car move faster
function speedUp() {
    // Decrease interval time to increase speed (but never less than 10)
    if (carSpeed > 10) {
        carSpeed -= 10;
    }

    // Stop any previous animation so we can restart with new speed
    clearInterval(animation);

    // Start a new animation that moves the car at the updated speed
    animation = setInterval(moveCar, carSpeed);
}

// Function that moves the car across the screen
function moveCar() {
    // Increase horizontal position by 5 pixels
    carPosition += 5;

    // Make sure the car has position relative so left works
    car.style.position = "relative";

    // Update the car's left style to move it visually
    car.style.left = carPosition + "px";

    // Check if the car has reached the edge
    checkPosition();
}

// Function to check if the car has crashed
function checkPosition() {
    // If the right side of the car is past the browser window
    if (carPosition + car.offsetWidth >= window.innerWidth) {
        // Show a crash alert
        alert("CRASH!");

        // Stop the car from moving
        clearInterval(animation);
    }
}

// Function to stop the car immediately
function stopCar() {
    clearInterval(animation);
}
