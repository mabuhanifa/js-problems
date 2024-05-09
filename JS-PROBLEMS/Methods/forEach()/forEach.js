let person = { name: "John", age: 30, city: "New York" };
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
