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

// console.log(countVowels("hello")); //2
// console.log(countVowels("javascript")); //3
// console.log(countVowels("sky")); //0

/*

Write a function reverseString that:

Takes a string

Returns the string reversed
*/

function reverseString(word) {
  let wordArr = word.split("");
  let reverse = [];

  for (let i = 0; i < word.length; i++) {
    reverse.unshift(word[i]);
    console.log(word[i]);
  }
  return reverse.join("");
}

// console.log(reverseString("hello"));

function isPalindrome(word) {
  let wordLower = word.toLowerCase();
  let reverse = [];

  // console.log(wordLower);
  for (let i = 0; i < word.length; i++) {
    reverse.unshift(wordLower[i]);
  }
  let reverseString = reverse.join("");
  // console.log(reverseString);
  return reverseString === wordLower;
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

/*
Write a function charCount that:

Takes a string

Returns an object with how many times each character appears
*/

function charCount(word) {
  let letterCount = {};
  for (let i = 0; i < word.length; i++) {
    letterCount[word[i]] ? letterCount[word[i]]++ : (letterCount[word[i]] = 1);
  }
  return letterCount;
}

function isPalindrome2(word) {
  let wordLowerCase = word.toLowerCase();
  let wordArr = [];

  for (let i = 0; i < word.length; i++) {
    wordArr.unshift(word[i]);
    // console.log(word[i]);
  }
  console.log(wordArr.join(""));
  let reverseWord = wordArr.join("");
  console.log(reverseWord);
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== reverseWord[i]) {
      return false;
    }
  }
  // console.log(reverseWord);
  // console.log(wordArr);
  return true;
}

// console.log(isPalindrome2("racecar"));

// console.log(charCount("hello"));

/*
Write a function isAnagram that:

Takes two strings

Returns true if they are anagrams

Returns false otherwise

Assume lowercase, no spaces
*/

function isAnagram(string1, string2) {
  // let wordLower = word.toLowerCase;
  let string1Lower = string1.toLowerCase();
  let string2Lower = string2.toLowerCase();

  let word1 = {};
  let word2 = {};
  if (string1.length !== string2.length) {
    return false;
  }
  for (let i = 0; i < string1.length; i++) {
    console.log(i);
    word1[string1Lower[i]]
      ? word1[string1Lower[i]]++
      : (word1[string1Lower[i]] = 1);
    word2[string2Lower[i]]
      ? word2[string2Lower[i]]++
      : (word2[string2Lower[i]] = 1);
  }
  console.log(word1);
  console.log(word2);
  // return word1 === word2;
  for (let key in word1) {
    if (word1[key] !== word2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(isAnagram("car", "rac"));

/*

Write a function firstUniqueChar that:

Takes a string

Returns the first character that appears only once

Returns null if none exist

Example
firstUniqueChar("aabbcdd"); // "c"
firstUniqueChar("aabb");   // null
firstUniqueChar("stress"); // "t"
*/

// function firstUniqueChar(string) {
//   for (let i = 1; i < string.length; i++) {
//     if (string[i] !== string[i - 1] && string[i] !== string[i + 1]) {
//       return string[i];
//     }
//   }
//   return null;
// }

function firstUniqueChar(string) {
  let countL = {};
  for (let i = 0; i < string.length; i++) {
    countL[string[i]] ? countL[string[i]]++ : (countL[string[i]] = 1);
  }
  // console.log(countL);
  for (let char of string) {
    // console.log(countL[char]);
    if (countL[char] === 1) {
      return char;
    }
  }
}
// console.log(firstUniqueChar("aabbcdd"));
// console.log(firstUniqueChar("aabb"));
// console.log(firstUniqueChar("stress"));
// console.log(firstUniqueChar("aabbcac"));

console.log("--");

let words1 = ["asd", "lala", "parangaricuti"];

let words1Sort = words1.reduce((acc, cur) =>
  acc.length > cur.length ? acc : cur
);

// console.log(words1Sort);

/*
Write a function longestWord that:

Takes a sentence (string)

Returns the longest word

If there is a tie, return the first longest word
*/

function longestWord(string) {
  // let words = string.split(" ");
  // let longestWord = null;
  // console.log(words);
  return string.split(" ").reduce((acc, cur) => {
    // console.log(acc.length > cur.length ? acc : cur);
    return acc.length > cur.length ? acc : cur;

    // console.log(acc.length > cur.length);
  });
}

// console.log(longestWord("I love javascript programming"));
// // "programming"

// console.log(longestWord("The quick brown fox"));
// // "quick"

// console.log(longestWord("Hello world"));

// // "Hello"

//again btu without .reduce

function longestWord2(string) {
  let words = string.split(" ");
  let longestWord = "";
  // console.log(words);
  for (let word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// console.log(longestWord2("I love javascript programming"));
// // "programming"

// console.log(longestWord2("The quick brown fox"));
// // "quick"

// console.log(longestWord2("Hello world")); //hello

// capitalize first word of every string

function capitalizeWords(string) {
  let words = string.split(" ");
  let wordsCap = [];
  for (let word of words) {
    // console.log(word);
    wordsCap.push(word[0].toUpperCase() + word.slice(1));
    // console.log(wordsCap);
  }
  // console.log(wordsCap);
  return wordsCap.join(" ");
}

// console.log(capitalizeWords("hello world")); // "Hello World"

//
// ############## Increased difficulty ##########

const products = [
  { id: 1, name: "Gi", category: "BJJ", price: 120 },
  { id: 2, name: "Gloves", category: "Muay Thai", price: 80 },
  { id: 3, name: "Belt", category: "BJJ", price: 15 },
  { id: 4, name: "Shin Guards", category: "Muay Thai", price: 95 },
  { id: 5, name: "Mouthguard", category: "MMA", price: 25 },
];

//Exercise A: Group products by category

// Task

// Write groupByCategory(products) that returns an object like: {
// {"BJJ": [
//   { id: 1, name: "Gi", category: "BJJ", price: 120 },
//   { id: 3, name: "Belt", category: "BJJ", price: 15 }
// ], "muay thai" : [{...}], "MMA" : [{...}, ]}

/*
function productsByCategory(arr) {
  let byCategory = { BJJ: [{ id: 1 }] };
  for (let item of arr) {
    console.log(item.category);
    if (byCategory[item.category]) {
      console.log("a");
      // console.log("already inclued, add this one");
      // console.log(byCategory[item.category]);
      // byCategory[item.category] = "asd";
      // byCategory[item.category] = [byCategory[item.category]];
      console.log(
        "here is what i cant find out , my lovig is spreading the object and adding the ITEM"
      );
      // console.log(byCategory);
      console.log(byCategory[item.category]);
    } else {
      console.log("b");
      byCategory[item.category] = item;
    }
  }
  return byCategory;
}
*/

function productsByCategory(arr) {
  let byCategory = {};

  for (let item of arr) {
    let category = item.category;

    if (!byCategory[category]) {
      byCategory[category] = [];
    }
    byCategory[category].push(item);
  }
  return byCategory;
}
// console.log(productsByCategory(products));

// Exercise B: Cart summary (total + itemCount)
const cart = [
  { name: "Gi", price: 120, qty: 1 },
  { name: "Belt", price: 15, qty: 2 },
  { name: "Gloves", price: 80, qty: 1 },
];

// result should be like { itemCount: 4, total: 230 }

function cartSummary(cart) {
  let summary = { itemCount: 0, total: 0 };
  for (let item of cart) {
    // console.log(item["qty"]);
    // console.log(item["qty"]);
    // summary = { itemCount: 1 };
    summary.itemCount += item["qty"];
    summary.total += item["qty"] * item["price"];
  }
  return summary;
}

console.log(cartSummary(cart));
