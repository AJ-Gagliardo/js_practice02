/*
Write a function called isEven that:

Takes one number as a parameter

Returns "Even" if the number is even

Returns "Odd" if the number is odd
*/

function isEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}

// console.log(isEven(4));
// console.log(isEven(7));

/*
Goal: Practice arrays and loops.

Task

Write a function called sumArray that:

Takes an array of numbers

Returns the sum of all numbers
*/

function sumArray(arr) {
  let totalSum = 0;
  for (let num of arr) {
    totalSum += num;
  }
  return totalSum;
}

// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([5, 10, 15])); // 30

/*
Write a function countPositives that:

Takes an array of numbers

Returns how many numbers are greater than 0
*/

function countPositives(arr) {
  let counter = 0;
  for (let num of arr) {
    num > 0 ? counter++ : "";
  }
  return counter;
}

// console.log(countPositives([1, -2, 3, 0, -5])); // 2
// console.log(countPositives([-1, -2, -3])); // 0
