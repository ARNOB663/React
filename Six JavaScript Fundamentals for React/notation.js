// Defining an object `person` with various properties
const person = {
    name: "david putra", // String property
    age: 45, // Number property
    friends: ["korim"], // Array property
    salary: 100, // Number property
    10: "code" // Numeric property (uncommon, but valid in JavaScript)
  };
  
  // Accessing the `name` property using dot notation
  const heroName = person.name; // Retrieves the value of the `name` property
  console.log(heroName); // Logs "david putra"
  
  // Accessing the `name` property using bracket notation
  const heroName1 = person['name']; // Retrieves the value of the `name` property
  console.log(heroName1); // Logs "david putra"
  
  // Accessing the numeric property `10` using bracket notation
  const code = person[10]; // Retrieves the value of the property with key `10`
  console.log(code); // Logs "code"