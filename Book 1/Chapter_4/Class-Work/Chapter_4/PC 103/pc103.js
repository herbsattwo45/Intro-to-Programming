/*************************************************
 * OBJECTS & ARRAYS PRACTICE (VERY SIMPLE)
 *************************************************/

/***********************
 * #1 SCOREKEEPER
 ***********************/

var scores = {
  Alice: 0,
  Bob: 0,
  Charlie: 0
};

scores.Alice++;
scores.Bob += 5;
scores.Charlie += 2;

console.log("Scores:", scores);

/***********************
 * #2 OBJECTS + ARRAYS
 * BROKEN INTO EASY STEPS
 ***********************/

var myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [
    7,
    9,
    { purpose: "confusion", number: 123 },
    3.3
  ],
  "random animal": "Banana Shark"
};

// Step 1: Get the array from the object
var myArray = myCrazyObject["some array"];

// Step 2: Get the object inside the array (3rd item)
var innerObject = myArray[2];

// Step 3: Get the number from that object
var result = innerObject.number;

// Final result
console.log("The number is:", result);


/*************************************************
 * END
 *************************************************/
