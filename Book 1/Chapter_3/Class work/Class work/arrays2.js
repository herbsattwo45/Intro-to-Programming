

// //Changing Elements
// //Update an array item by specifying its index and setting a new value 

var mixedDataType = [36, 'Am Batman', true, {name: 'John Rambo'}, [200, 202, 206], false, 'Goalllllllllllllllllllllllll'];
 console.log("Data type Value:", mixedDataType[4][2]); 


 //Creating Array
 var heros = ['Arnold Schwarzenegger', 'Stallone', 'Tom Cruise', 'Bruce Willis', 'Bruce Lee'];


 // Adding Elements: Append new items to the end of the array. 
 heros.push('Jason Statham','Keanu Reeves');
 console.log("After-appending:", heros);



 // Finding Length: 
 console.log("heros Length:", heros.length);

// //Changing Elements
// //Update an array item by specifying its index and setting a new value 

 heros[2] = 'Jean-Claude Van Damme';
 console.log("New value in the Array:", heros);



 // Removing Elements: 
//Remove items from the end or a specific position in the array. 
  console.log("Removed item:",heros.pop('Bruce Willis'));
 console.log("Array After-pop:", heros);



 //  Joining Arrays:
 var allThings = heros.concat(mixedDataType); 
 console.log("Concat:",allThings); 


 //  Finding Index: 
 console.log("Index-Of the value:",allThings.indexOf('Jean-Claude Van Damme'));

//  Turning into a String: 
// Convert the array into a single string with elements separated by a comma. 
 var mixedString = allThings.join(' + ');
 console.log("Coverted String:",mixedString);

// Building with push: Add new items to the end of the array. 
 var xbox = [];
xbox.push('Forza','Halo', 'Gears', 'Fable', 'State Of Decay', 'Flight Sim');
 console.log("Xbox Array:",xbox);

//  Adding to the beginning of the array: 
 xbox.unshift(  'State Of Decay', 'Fable' , 'Flight Sim');
 console.log("Added:",xbox);