// Initial car speed (lower number = faster)
var carSpeed = 250;

// Starting position of the car
var carPosition = 0;

// Holds the animation interval
var animation;

// Select car element
var car = document.getElementById("car");
car.addEventListener("click", speedUp);

// Stop button
var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopCar);

function speedUp() {
    if (carSpeed > 10) {
        carSpeed -= 10;
    }

    clearInterval(animation);
    animation = setInterval(frame, carSpeed);
}

function frame() {
    carPosition += 2;
    car.style.left = carPosition + "px";
    checkPosition(carPosition);
}

function checkPosition(position) {
    if (position >= 260) {
        alert("CRASH!");
        clearInterval(animation);
    }
}

function stopCar() {
    if (carPosition < 260) {
        clearInterval(animation);
    }
}
