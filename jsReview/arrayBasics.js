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

// Given
let nums = [5, 3, 8, 1, 4];
// Sort the array in ascending order.

nums.sort();
console.log("sorderd nums", nums);
// Sort the array in descending order.
nums.reverse();
console.log("sorted numbers descending", nums);

// Given
let ages = [15, 22, 18, 30, 40, 12];
// Create a new array containing only the ages 18 and above.

// function filterAge() {
//   let ageMoreThan = [];
//   ages.map((age) => {
//     if (age > 18) {
//       ageMoreThan.push(age);
//     }
//   });
//   return ageMoreThan;
// }

let agesMoreThan = ages.filter((age) => age > 18);
console.log("ages greater than 18", agesMoreThan);

// Given
let prices = [10, 20, 30, 40];
// Create a new array where each price is doubled.

// function multiplyPrice(n) {
//   let newPrices = [];
//   prices.map((price) => {
//     let multiplication = price * n;
//     newPrices.push(multiplication);
//   });
//   return newPrices;
// }

// console.log("multiply prices * 2 ", multiplyPrice(2));
const newPrices = prices.map((price) => price * 2);
console.log("multiply prices * 2 ", newPrices);

// 6. Reversing an Array
// Reverse the array [1, 2, 3, 4, 5] without modifying the original.

let array123 = [1, 2, 3, 4, 5];
let array321 = [...array123].reverse();
console.log(array321);

// 7. Merging Arrays
// Given let a = [1, 2, 3]; and let b = [4, 5, 6];
// Merge them into a single array.

let a = [1, 2, 3];
let b = [4, 5, 6];

// let c = a.concat(b);
let c = [...a, ...b];
console.log("merged arrays", c);

// ------------ some last basics

// 1. Remove the second element from this array:
let numbers2 = [100, 200, 300, 400];
let newNumber2 = numbers2.splice(1, 1);
console.log("removing second number ", numbers2);
// 2. Get the last two elements without modifying the original array.
let animals = ["dog", "cat", "rabbit", "parrot"];
let newAnimals = animals.slice(-2);
console.log("last 2 animals", newAnimals);

// 3. Convert this array into a single string:
let words2 = ["JavaScript", "is", "awesome"];
console.log("combining arrays", words2.join(" "));

// 4. Find the first number greater than 50 in this array:
let values = [10, 25, 50, 75, 100];
console.log(
  "finding first value greater than 50 :",
  values.find((value) => value > 50)
);

// 5. Sum all numbers in this array:
let totals = [5, 10, 15, 20];
console.log(
  "reducing an array: ",
  totals.reduce((acc, num) => acc + num, 0)
);

// 6. Flatten this array into a single-level array:
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("flattening a nested array: ", nested.flat(2));

//
console.log("numbers 3...");
let numbers3 = [10, 5, 8, 20, 15, 20, 7];

const sortedNumbers3 = numbers3.sort(function (a, b) {
  return a - b;
});
console.log(
  `the largest number is ${sortedNumbers3[sortedNumbers3.length - 1]}`
);

// Expected Output: 15

console.log("finding common elements");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

// Expected Output: [3, 4, 5]
function includesNum(value, array) {
  if (array.includes(value)) {
    return true;
  }
  return false;
}

console.log(`test1 includes num in array`);
console.log(includesNum(1, arr1));
console.log(`test2 includes num in array`);
console.log(includesNum(6, arr1));

//arr1 have to map or go over each element
//ask if arr1 item is included in array 2

const valuesBotharr = arr1.filter((value) => includesNum(value, arr2));
console.log(valuesBotharr);
