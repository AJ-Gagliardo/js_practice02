let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2);
numbers.add(3);

console.log(numbers);

let uniqueNumbers = [...new Set(numbers)];
console.log("unique numbers: ", uniqueNumbers);
