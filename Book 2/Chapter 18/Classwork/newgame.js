/****************************************
 GLOBAL VARIABLES
****************************************/

// Total food units you start with
var food = 30;

// Number of days you survived
var daysSurvived = 0;

// Show starting food
document.getElementById("food").textContent = food;

// Button starts the game
document.getElementById("startSurvival")
        .addEventListener("click", surviveZombies);

/****************************************
 MAIN GAME FUNCTION
****************************************/
function surviveZombies() {

    // Reset everything before starting
    resetGame();

    // Day counter
    var day = 0;

    // Keep going while we still have food
    while (food > 0) {

        day++;

        // Random extra hunger (zombies are stressful)
        var hungerFactor = getRandomHunger();

        // Food player eats per day
        var baseFood =
            Number(document.getElementById("foodPerDay").value);

        // Total food eaten today
        var foodUsed = baseFood + hungerFactor;

        // Check if enough food exists
        if (food >= foodUsed) {

            // Subtract food
            food = food - foodUsed;

            // Count survived day
            daysSurvived++;

            // Show what happened
            document.getElementById("log").innerHTML +=
                "<p>Day " + day +
                ": Ate " + foodUsed +
                " food. Food left: " +
                food + "</p>";

        } else {

            // Not enough food to survive the day
            document.getElementById("log").innerHTML +=
                "<p>Day " + day +
                ": No food left. You didn’t survive </p>";

            break;
        }
    }

    // Final message
    document.getElementById("log").innerHTML +=
        "<p><strong>You survived " +
        daysSurvived + " days.</strong></p>";
}

/****************************************
 RANDOM HUNGER FUNCTION
****************************************/
function getRandomHunger() {

    // Random number: 0, 1, or 2
    return Math.floor(Math.random() * 3);
}

/****************************************
 RESET GAME FUNCTION
****************************************/
function resetGame() {

    food = 30;
    daysSurvived = 0;

    document.getElementById("food").textContent = food;
    document.getElementById("log").innerHTML = "";
}
