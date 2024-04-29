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
