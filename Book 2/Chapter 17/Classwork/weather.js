/****************************************************
 * Array holding the days of the week
 ****************************************************/
var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

/****************************************************
 * Array of weather types
 * IMPORTANT:
 * These names MUST match the CSS class names exactly
 ****************************************************/
var weatherTypes = [
    "Sunny",
    "PartlySunny",
    "PartlyCloudy",
    "Cloudy",
    "Raining",
    "Snowing",
    "Thunderstorm",
    "Foggy"
];

/* Maximum and minimum temperature limits */
var maxTemp = 100;
var minTemp = 0;

/* Call the function as soon as the page loads */
generateWeather();

/****************************************************
 * Function: generateWeather
 * Purpose:
 *  - Loops through each day
 *  - Randomly picks weather + temperature
 *  - Creates HTML and injects it into the page
 ****************************************************/
function generateWeather() {

    /* Get reference to the container div */
    var container = document.getElementById("weatherContainer");

    /* Loop through all days */
    for (var i = 0; i < days.length; i++) {

        /* Random weather type */
        var todayWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

        /* Random temperature */
        var todayTemp = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        /* Create a new div element */
        var dayDiv = document.createElement("div");

        /* Assign base class + weather class */
        dayDiv.className = "weather-day " + todayWeather;

        /* Insert forecast text */
        dayDiv.innerHTML =
            "<strong>" + days[i] + "</strong><br><br>" +
            "Condition: " + todayWeather + "<br>" +
            "Temperature: " + todayTemp + "°";

        /* Add the day card to the page */
        container.appendChild(dayDiv);
    }
}
