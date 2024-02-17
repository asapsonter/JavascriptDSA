// Define an array
const colors = ["red", "green", "blue", "yellow", "pink"];

// Remove two elements from index 1 and add one element
const removed = colors.splice(1, 2, "purple");

// Print the result
console.log(colors); // ["red", "purple", "yellow", "pink"]
console.log(removed); // ["green", "blue"]
