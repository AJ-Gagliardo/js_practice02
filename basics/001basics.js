// Practicing absolute basics. I took a break for 2 months so I want to check material

// Found exercises online / asked ai to give me some to be able to practice

//Create a variable with your name and log:
// Hello, my name is <your name>.
console.log("name exercise");
const name = "Antonio";
console.log(`Hello, my name is ${name}`);

//Make an array of your 3 favorite foods.

// Print the first and last item.

// Add one more food to the array.

console.log("---array---");

const favFood = ["bulgogi", "ramen", "spaghetti a la bolognesa"];
console.log(`${favFood[0]}, ${favFood[favFood.length - 1]} `);
favFood.push("Encebollado");
console.log(`My favorite food are ${favFood}`);

// Exercise 3: Loops

// Write a loop that prints the numbers from 1 to 10, but skip the number 5.

console.log("--- loop 1 ---");
function loop1() {
  for (let i = 0; i < 11; i++) {
    i !== 5 ? console.log(i) : "";
  }
}
loop1();

// Exercise 4: Functions

// Write a function add(a, b) that returns the sum of two numbers.

// Try calling it with (2, 3) and (10, 25).

console.log("---Exercise add 2 numbers function---");
function add2num(a, b) {
  console.log(a + b);
}

add2num(2, 3);
add2num(10, 25);

// Create an object car with properties: brand, model, and year.

// Print "My car is a <year> <brand> <model>".

console.log("--- car object exercise -- ");
const car = { brand: "Kia", model: "Soul", year: "2011" };
console.log(`My car is a ${car.year} ${car.brand} ${car.model}`);
