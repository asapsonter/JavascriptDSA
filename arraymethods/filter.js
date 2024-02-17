// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define a function that checks if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Call the filter() method on the array, passing the function as an argument
const evens = numbers.filter(isEven);

// Print the result
console.log(evens); // [2, 4, 6, 8, 10]
