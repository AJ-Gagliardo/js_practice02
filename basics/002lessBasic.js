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
