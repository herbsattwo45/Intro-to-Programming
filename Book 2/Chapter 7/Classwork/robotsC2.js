// ----------------------
// ARM POSITION (HAPPY)
// ----------------------

// Lift the left arm a little
document.getElementById("leftarm").style.transform = "rotate(-15deg)";

// Lift the right arm a little
document.getElementById("rightarm").style.transform = "rotate(15deg)";


// ----------------------
// EYE MOVEMENT
// ----------------------

// Get both eyes and store them in variables
let leftEye = document.getElementById("lefteye");
let rightEye = document.getElementById("righteye");

// This moves the eyes left and right
let moveRight = true;

// Every 700 milliseconds, run this code
setInterval(function () {

    // If eyes are moving right
    if (moveRight) {
        leftEye.style.left = "30px";
        rightEye.style.right = "20px";
    }
    // Otherwise move them left
    else {
        leftEye.style.left = "20px";
        rightEye.style.right = "30px";
    }

    // Switch direction
    moveRight = !moveRight;

}, 700);
