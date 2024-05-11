const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount);

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Alice", age: 40 },
];
const groupedByName = people.reduce((acc, person) => {
  acc[person.name] = acc[person.name] || [];
  acc[person.name].push(person);
  return acc;
}, {});
console.log(groupedByName);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const operations = [add, subtract, multiply];
const numbers = [1, 2, 3, 4];

const result = operations.reduce(
  (acc, fn) => fn(acc, numbers[operations.indexOf(fn)]),
  numbers[0]
);
console.log(result);
