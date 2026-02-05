// Create an object that stores information about the car
var dreamCar = {
    make: "Oldsmobile",     // Brand of the car
    model: "98",            // Model number
    color: "brown",         // Car color
    year: 1983,             // Year the car was made
    bodyStyle: "Luxury Car",// Type of car
    price: 4500             // Price of the car
};

// Show the year inside the span with id="modelyear"
document.getElementById("modelyear").innerHTML = dreamCar.year;

// Show the price inside the span with id="pricetag"
document.getElementById("pricetag").innerHTML = dreamCar.price;

// Show what type dreamCar is (it is an object)
alert("The type of dreamCar is: " + typeof dreamCar);

// ------------------------------------
//  CAR MOVEMENT LOGIC
// ------------------------------------

// Grab the car div from the HTML
var car = document.getElementById("car");

// This keeps track of the car's position
var position = 0;

// This function moves the car
function moveCar() {

    // Increase the position by 1 pixel
    position = position + 1;

    // Apply the new position to the car
    car.style.left = position + "px";

    // If the car moves too far right...
    if (position > 500) {

        // Reset the car back to the start
        position = 0;
    }
}

// Run moveCar() every 10 milliseconds
setInterval(moveCar, 10);
