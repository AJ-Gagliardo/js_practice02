// Exercise 11: Array Filter

// Write a function filterEvenNumbers(arr) that takes an array and returns a new array with only the even numbers.
// Example: [1, 2, 3, 4, 5, 6] → [2, 4, 6]

console.log("--- filter even numbers ---");
const arr1 = [1, 2, 3, 4, 5, 6];
function filterEvenNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] % 2 === 0 ? newArr.push(arr[i]) : "";
  }
  return newArr;
}

console.log(filterEvenNumber(arr1));

// Write a function wordCount(str) that counts how many words are in a string.

// "I love learning JavaScript" → 4

console.log("--- word count ---");
function wordCount(str) {
  let str1 = str.split("");
  // console.log(str1);
  // console.log(str1.length);
  let wordCounter = 1;

  for (let i = 0; i < str1.length; i++) {
    str1[i] === " " ? (wordCounter += 1) : "";
  }
  return wordCounter;
}

console.log(wordCount("tralarero tralala"));

// Exercise 13: Find Duplicates

// Write a function that finds duplicates in an array.
// Example: [1, 2, 3, 4, 2, 5, 1] → [1, 2]

const arr2 = [1, 2, 3, 4, 2, 5, 1];
console.log("--- duplicates ---");
function findDuplicates(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  // console.log(sortedArray);
  let duplicates = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (
      sortedArray[i] === sortedArray[i + 1] &&
      !duplicates.includes(sortedArray[i])
    ) {
      duplicates.push(sortedArray[i]);
    }
  }
  return duplicates;
}

console.log(findDuplicates(arr2));

// Exercise 14: Factorial

// Write a function factorial(n) that returns the factorial of a number (n!).
// Example: factorial(5) → 120

console.log("---factorial ---");

function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log(factorial(5));
