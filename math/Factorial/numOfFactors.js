// getting an array of factors of n
function factorsOf(n) {
  // declare emtpy array to store factors
  let factors = [];
  //loop through n
  for (let i = 1; i <= n; i++) {
    //check if number in loop is a factor of n
    if (n % i === 0) {
      //push factors to empty list
      factors.push(i);
    }
  }
  return factors;
}
console.log(factorsOf(5));

//recursion
// function to find the factors of a number using recursion
function factorsOf(n, i = 1, factors = []) {
  // check the base case
  if (i > n) {
    return factors;
  }
  // check if i is a factor of n
  if (n % i === 0) {
    // add i to the factors array
    factors.push(i);
    // call the function again with the next factor
    return factorsOf(n, i + 1, factors);
  }
  // call the function again with the next factor
  return factorsOf(n, i + 1, factors);
}

// test the function with n = 5
console.log(factorsOf(5)); // should print [1, 5]

