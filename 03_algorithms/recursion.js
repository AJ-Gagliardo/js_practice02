// learning

function countdown(n) {
  // 1.- base case
  if (n <= 0) {
    return;
  }
  // 2.- work
  console.log(n);
  // 3.-recursive call
  countdown(n - 1);
}

// countdown(5);

// sayHI

function sayHi(times) {
  if (times === 0) {
    return console.log("done");
  }

  console.log(`hi ${times}`);

  sayHi(times - 1);
}

// sayHi(5);

// count up

function countUp(n) {
  if (n === 0) return;

  countUp(n - 1);

  console.log(n);
}

// countUp(3);

function countUpMirror(n) {
  //base case
  if (n < 0) return;

  //work before recursion
  console.log(n);

  //recursive call
  countUpMirror(n - 1);
  //work after recursion
  console.log(n);
}

// countUpMirror(3);

function evenOddPattern(n) {
  //base call
  if (n === 0) return;
  //work before
  if (n % 2 > 0) console.log(`odd ${n}`);
  //recursion call
  evenOddPattern(n - 1);
  //work after recursion
  if (n % 2 === 0) console.log(`even ${n}`);
}

// evenOddPattern(4);

function mirrorLetters(inputLetter) {
  //base
  let number = inputLetter.charCodeAt(0);
  let letter = String.fromCharCode(number);
  if (number === 65) return console.log("A");

  //work before
  // console.log(number);
  console.log(String.fromCharCode(number));
  // console.log(String.fromCharcode(letter));

  //recursion call
  mirrorLetters(String.fromCharCode(number - 1));

  //work after
  console.log(String.fromCharCode(number));
}

// mirrorLetters("C");

const user = {
  name: "Antonio",
  age: 33,
  address: {
    city: "Vancouver",
    country: "Canada",
    details: {
      postal: "xxx",
      apartment: 123,
    },
  },
  scores: {
    math: 88,
    english: 95,
  },
};

// console.log(Object.values(user));
function printKeys(obj) {
  for (let key in obj) {
    //print key
    console.log(key);
    // check if its another object + recursion
    let value = obj[key];

    if (typeof value === "object") {
      printKeys(value);
    }
  }
}
printKeys(user);
