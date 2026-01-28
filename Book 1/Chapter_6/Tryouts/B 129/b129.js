//Using a for loop
// Start with 3
// Keep multiplying by 3
// Stop when the number is 10,000 or more

for (let number = 3; number < 10000; number = number * 3) {
    console.log(number);
}

//What’s happening (very simply):
//let number = 3 → start at 3
//number < 10000 → stop before it gets too big
//number = number * 3 → each time, multiply by 3
//console.log(number) → print the number 




//Same thing using a while loop
// Setup BEFORE the loop
let number = 3;

// As long as the number is under 10,000
while (number < 10000) {
    console.log(number);   // print the number
    number = number * 3;   // multiply by 3
}


//Even simpler explanation:
//Start at 3
//Print it
//Multiply by 3
//Repeat until it reaches 10,000