// Falsy values in JavaScript: 0, -0, "", null, undefined
// Truthy values in JavaScript: Non-empty strings, numbers other than 0, objects, arrays, true, etc.

const test = {}; // An empty object is considered truthy in JavaScript

// Checking if `test` is truthy or falsy using an `if` statement
if (test) {
    console.log("Its true"); // This will execute because `test` is truthy
} else {
    console.log("its falsy");
}

// Using a ternary operator to check if `test` is truthy or falsy
test ? console.log("its truthy") : console.log("its falsy");

// Declaring a number variable
const num = 50;

// Using a ternary operator to check if `num` is between 10 and 20
const result = (num >= 10 && num < 20) ? "true" : "false";
console.log(result); // Logs "false" because `num` is not in the range 10-20

// Declaring a boolean variable
const isActive = false;

// Using the NOT operator `!` to invert the value of `isActive`
console.log(!isActive); // Logs `true` because `isActive` is `false`

// Defining a function to show the user
const showUser = () => console.log("Show user green");

// Defining a function to hide the user
const hideUser = () => console.log("Hide User");

// Using a ternary operator to call `showUser` or `hideUser` based on `isActive`
isActive ? showUser() : hideUser(); // Calls `hideUser` because `isActive` is `false`

// Using the AND operator `&&` to conditionally call `showUser` or `hideUser`
isActive && showUser(); // Does nothing because `isActive` is `false`
isActive && hideUser(); // Does nothing because `isActive` is `false`

// Declaring a string variable
let num1 = "10";

// Using the unary plus operator `+` to convert `num1` to a number
console.log(typeof +num1); // Logs "number" because `+num1` converts the string to a number
console.log(num1); // Logs "10" (the original string value)

// Performing subtraction with `num1` (JavaScript automatically converts it to a number)
let result1 = num1 - 2;
console.log(result1); // Logs 8 because "10" is converted to 10 and then 2 is subtracted