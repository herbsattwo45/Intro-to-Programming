// START AT 0, JUMP BY 2
// i = 0   -> Start at Zero (Even).
// i <= 10 -> Keep going until we hit 10.
// i += 2  -> Add 2 every time (0, 2, 4...).
for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10



// START AT 1, JUMP BY 2
// i = 1   -> Start at One (Odd).
// i <= 10 -> Keep going as long as we are 10 or less.
// i += 2  -> Add 2 every time (1, 3, 5...).
for (var i = 1; i <= 10; i += 2) {
  console.log(i);
}
// Output: 1, 3, 5, 7, 9




// 1. START HIGH, GO LOW
// 'var i = 100' -> Start at 100.
// 'i >= 0'      -> Keep going as long as we are above or equal to 0.
// 'i -= 10'     -> Take away 10 every time (Subtract).
for (var i = 100; i >= 0; i -= 10) {
  
  // 2. PRINT THE NUMBER
  // This prints 100, 90, 80... all the way down to 0.
  console.log(i);
}


// 1. SETUP THE LOOP
// 'var i = 0' -> Start at 0.
// 'i < 5'     -> Run while i is 0, 1, 2, 3, 4.
// '++i'       -> Add 1 to i. (In a loop like this, it works just like i++).
for (var i = 0; i < 5; ++i) {

  // 2. PRINT THE NUMBER
  // This prints 0, 1, 2, 3, 4.
  console.log(i);
}