// Given an array of users, filter out inactive ones and sort the active users alphabetically by name.

let users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Charlie", active: false },
  { id: 3, name: "Bob", active: true },
  { id: 4, name: "David", active: false },
  { id: 5, name: "Eve", active: true },
];

// Expected Output:
// [
//   { id: 1, name: "Alice", active: true },
//   { id: 3, name: "Bob", active: true },
//   { id: 5, name: "Eve", active: true }
// ]

// console.log(users.filter((user) => user.active === true).sort(users.name));

console.log(
  "active users alphabetically ",
  users
    .filter((user) => user.active === true)
    .sort((a, b) => a.name.localeCompare(b.name))
);

//Given an array of products, find the most expensive one.
let products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 },
  { name: "Monitor", price: 300 },
];

// Expected Output: { name: "Laptop", price: 1200 }

const mostExpensiveProduct = products.sort((a, b) => b.price - a.price)[0];
console.log("Sort by Price: ", mostExpensiveProduct);

// You have an array with nested arrays and duplicates. Flatten it into a single-level array with only unique values.

let nestedArray = [1, [2, 3], [4, 5, [6, 7]], 3, 4, 8, [9, 10, 1]];

// Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNestedArray = [...new Set(nestedArray.flat(2))];
console.log(newNestedArray);

//Convert an array of objects into an array of strings formatted for display.
let books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

// Expected Output:
// [
//   "1984 by George Orwell (1949)",
//   "To Kill a Mockingbird by Harper Lee (1960)",
//   "The Great Gatsby by F. Scott Fitzgerald (1925)"
// ]

// const book1 = { title: "1984", author: "George Orwell", year: 1949 };
// console.log(Object.values(book1).join(" "));

let booksToString = books.map((book) => Object.values(book).join(" "));
console.log(booksToString);

//Find the first repeated number in an array.

let numbers = [5, 1, 2, 3, 5, 7, 8, 1, 9];

// Expected Output: 5

//Find the longest word in an array.
let sentence = ["JavaScript", "React", "Node", "Programming", "Web"];

// Expected Output: "Programming"

//Group an array of items by category
let items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Broccoli", category: "Vegetable" },
];

// Expected Output:
// {
//   Fruit: ["Apple", "Banana"],
//   Vegetable: ["Carrot", "Broccoli"]
// }
