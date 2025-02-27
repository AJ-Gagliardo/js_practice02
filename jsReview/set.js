let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2);
numbers.add(3);

console.log(numbers);

let uniqueNumbers = [...new Set(numbers)];
console.log("unique numbers: ", uniqueNumbers);

let numbers2 = [3, 1, 2, 3, 5, 7, 8, 1, 9];

let individualNumber = new Set();

function repeatedNumber() {
  for (let x of numbers2) {
    if (individualNumber.has(x)) {
      return x;
    }
    individualNumber.add(x);
  }
  return null;
}
console.log(repeatedNumber());
