// learning

/*
function countdown(n) {
  // 1.- base case
  if (n <= 0) {
    return;
  }
  // 2.- do something
  console.log(n);
  // 3.-recursive call
  countdown(n - 1);
}

countdown(5);

// sayHI

function sayHi(times) {
  if (times === 0) {
    return console.log("done");
  }

  console.log(`hi ${times}`);

  sayHi(times - 1);
}

sayHi(5);

*/
// count up

function countUp(n) {
  if (n === 0) {
    return;
  }

  countUp(n - 1);

  console.log(n);
}

countUp(3);
