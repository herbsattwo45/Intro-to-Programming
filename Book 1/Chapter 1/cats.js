// 1. CREATE THE TOOL
// We make a new command called 'drawCats'.
// It waits for us to tell it a number ('howManyTimes').
var drawCats = function (howManyTimes) {

    // 2. START COUNTING
    // Start at 0. Keep going as long as we are under the number.
    // (This creates a loop that runs over and over).
    for (var i = 0; i < howManyTimes; i++) {

        // 3. PRINT THE CAT
        // Print the current count number + the cat face.
        console.log(i + " =^.^=");
    }
};

// 4. USE THE TOOL
// Run the command we just made!
// We put '10' in the parentheses, so it draws 10 cats.
drawCats(10);




// 1. START THE LOOP
// 'var i = 8'  -> We start counting at 8 (not 0).
// 'i < 11'     -> We keep going as long as the number is LESS than 11.
// 'i++'        -> We go up by 1 each time.
for (var i = 8; i < 11; i++) {

    // 2. PRINT THE RESULT
    // This will print the number 8, then 9, then 10.
    console.log(i + " =^.^=");
};