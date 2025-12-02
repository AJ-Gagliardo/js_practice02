// learning

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
