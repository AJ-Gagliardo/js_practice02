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

function findMax(arr) {
  let maxValue = arr[0];

  for (let num of arr) {
    if (num > maxValue) {
      maxValue = num;
    }
  }
  return maxValue;
}

// console.log(findMax([3, 7, 2, 9, 4])); // 9
// console.log(findMax([-5, -2, -10])); //-2

function findMax2(arr) {
  return Math.max(...arr);
}

// console.log(findMax2([3, 7, 2, 9, 4]));
// console.log(findMax2([-5, -2, -10])); //-2

/*
Write a function countEvensAndOdds that:

Takes an array of numbers

Returns an object with:

evens: how many even numbers

odds: how many odd numbers
*/
function countEvensAndOdds(arr) {
  let evenAndOdds = { evens: 0, odds: 0 };
  for (let num of arr) {
    if (num % 2 === 0) {
      evenAndOdds.evens++;
    } else {
      evenAndOdds.odds++;
    }
  }
  return evenAndOdds;
}

// console.log(countEvensAndOdds([4, 4, 3, 1]));

function includesNumber(arr) {
  let newArray = [];
  for (let num of arr) {
    if (newArray.includes(num)) {
      // console.log(`${num} is already in the array`);
    } else {
      newArray.push(num);
    }
  }
  return newArray;
}
// console.log(includesNumber([1, 2, 3, 2]));
// console.log(includesNumber([-1, 0, 5]));

/*
Write a function doubleNumbers that:

Takes an array of numbers

Returns a new array

Each number is multiplied by 2

The original array must NOT be changed
*/

function doubleNumbers(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}

// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
// console.log(doubleNumbers([-1, 0, 5])); // [-2, 0, 10]

function getPositives(arr) {
  let newArray = [];
  for (let num of arr) {
    if (num > 0) {
      newArray.push(num);
    }
  }
  return newArray;
}

// console.log(getPositives([1, -2, 3, 0, -5])); // [1,3]
// console.log(getPositives([-1, -2])); // []

function countVowels(string) {
  let stringLowerCase = string.toLowerCase();
  let splitString = stringLowerCase.split("");
  const vowels = ["a", "e", "i", "o", "u"];

  // console.log(splitString);
  let counter = 0;
  for (let letter of splitString) {
    if (vowels.includes(letter)) {
      // console.log(letter);
      counter++;
    }
  }
  // console.log(splitString);
  // return splitString.length;
  return counter;
}

console.log(countVowels("hello")); //2
console.log(countVowels("javascript")); //3
console.log(countVowels("sky")); //0
