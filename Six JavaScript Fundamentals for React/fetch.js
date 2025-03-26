// Defining an object `person` with nested properties
const person = {
    name: "Rakin absar", // Name of the person
    age: 40, // Age of the person
    friends: ["bd", "CN", "rahim"], // Array of friends
    family: { // Nested object representing the family
      fatherName: "rahim sinior", // Father's name
      motherName: "rahima" // Mother's name
    }
  };
  
  // Converting the `person` object into a JSON string using `JSON.stringify`
  const jsonData = JSON.stringify(person);
  console.log(jsonData); // Logs the JSON string representation of the `person` object
  
  // Parsing the JSON string back into a JavaScript object using `JSON.parse`
  const planData = JSON.parse(jsonData);
  console.log(planData); // Logs the parsed object, which is identical to the original `person` object

//fetch
// Making a GET request to the JSONPlaceholder API
// fetch("https://jsonplaceholder.typicode.com/posts").then(Res => Res.json())
// .then(data=>console.log(data))

const person1 ={
    name:"rakib",
    age:40,
    friends: ["BD","USA","UK"],
    family:{
        fatherName: "rahim sinior", // Father's name
      motherName: "rahima" // Mother's name
    }
}

const keys = Object.keys(person1)
console.log(...keys)
const values=Object.values(person)
console.log(values)

// Defining an array of product objects
const products = [
    { name: "xiaomi", brand: "xiaomi", price: 3000, color: "Black" }, // Product 1
    { name: "samsumg", brand: "samsumg", price: 3000, color: "Black" }, // Product 2
    { name: "apple1", brand: "apple", price: 16000, color: "Black" }, // Product 3
    { name: "m2", brand: "xiaomi", price: 3000, color: "Black" }, // Product 4
    { name: "oneplus10r", brand: "oneplus", price: 3000, color: "Black" } // Product 5
];

// Defining a new product object
const newData = {
    names: "walton", // Name of the new product
    brand: "walton", // Brand of the new product
    price: 3000, // Price of the new product
    color: "gray" // Color of the new product
};

// Creating a new array by spreading the existing `products` array and adding the new product
const newArray = [...products, newData];

// Logging the new array to the console
console.log(newArray); // Displays the updated array with the new product added
const remainingProducts=products.filter(p=>p.brand!=="xiaomi")
console.log(remainingProducts)
const newArray2=[...remainingProducts,newData];
console.log(newArray2)



