let fruits = ["Apple", "Banana", "Cherry"];

// Accessing Elements

// Print the first element of the fruits array.
console.log(fruits[0]);

// Print the last element without directly writing its index.
console.log(fruits[fruits.length - 1]);

// Modifying Elements ####

// Change "Banana" to "Mango".
fruits[1] = "Mango";
// Add "Orange" at the end of the array.
fruits.push("Orange");
console.log(fruits);

// Array Length
// Print how many elements are in the fruits array.
console.log(fruits.length);

// Adding & Removing Elements

// Remove the last element from the array.
console.log("removing last");
fruits.pop();
console.log(fruits);
// Add "Grapes" at the beginning of the array.
console.log("adding Grapes");
fruits.unshift("Grapes");
console.log(fruits);
// Looping Through an Array

// Use a for loop to print each fruit.
console.log("loop through list");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Check if an Element Exists

// Check if "Cherry" is in the array and print true or false.
console.log("is Cherry in the array? ", fruits.includes("Cherry"));

// Aray Seaarching and sorting

let numbers = [10, 20, 30, 40, 50];

// Find the index of 30 in the array.
console.log("index of 30 is ", numbers.indexOf(30));
// Find the index of 60. What does it return?
console.log("index of 60 is ", numbers.indexOf(60));

// 2. Checking Conditions in an Array
// Given let words = ["apple", "banana", "cherry", "date"];
let words = ["apple", "banana", "cherry", "date"];
// Check if any word in the array starts with "b".
console.log(
  "a words starts with 'b'? ",
  words.some((word) => word.startsWith("b"))
);

// Check if all words have more than 3 letters.
