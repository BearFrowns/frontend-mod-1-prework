/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `nope day_2/exercises/arrays.js`
*/

// example: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// Declare a variable that will store an an array of at least 3 foods (strings)
var food = ["Pho", "Steak", "Fish", "Rice"];

// example: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// Write code below that will log the number of elements in the array of
// foods from above.
console.log(food.length);

// Write code below that will log "Zebra" from the animals array
console.log(animals.shift);

// Write code using bracket notation that will log the first item in the animals array

console.log(animals[0]);

// Write code using bracket notation that will log the last item in the animals array
console.log(animals[2]);

// Write code using bracket notation that will reassign the last item in the animals
// array to "Gorilla"
console.log[animals.splice(2, 1, "Gorilla")];

// Write code below that will log the last item from the foods array.
console.log(food.pop());
// Write code below that uses a method to add "lion" to the animals array and
// log the changed array to verify "lion" has been added
console.log(animals.unshift("lion"));

// Write code below that removes the last item of food from the foods array and
// log the cahnged array to verify that item has been removed
console.log(food.pop());
console.log(food);
