// Declaring two string variables
const fname = "Arnob";
const lname = "Dev nath";

// Concatenating strings using the + operator
console.log(fname + lname);

// Using template literals to format and log a string
console.log(`i am ${fname} ${lname}`);

// Function declaration using the `function` keyword
// This function logs the `arguments` object, which contains all arguments passed to the function
function sum() {
    console.log(arguments);
}

// Arrow function that takes two arguments and returns their sum
const sum1 = (a, b) => a + b;

// Arrow function using the rest parameter to collect all arguments into an array
// Logs the array of arguments passed to the function
const sum2 = (...rest) => {
    console.log(rest);
};

// Calling `sum2` with multiple arguments, which will be logged as an array
sum2(1, 2, 3, 4, 5);

// Arrow function that takes three arguments and returns their sum
const sum3 = (a, b, c) => a + b + c;

// Calling `sum3` with three arguments and storing the result in a variable
const result = sum3(1, 2, 3);

// Logging the result of `sum3` with three arguments
console.log(sum3(1, 2, 3));

// Calling `sum3` with more arguments than it expects
// Only the first three arguments will be used, as the function is defined to take three parameters
console.log(sum3(1, 2, 3, 4, 5));

const number = [1,2,3,4,5,6]

console.log(...number ) 
//... spred oparator
const newNumber = [...number , 10 , 11 , 1000]

console.log(...newNumber)


