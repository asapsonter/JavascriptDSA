// function to calculate the factorial of a number
function factorial(n) {
  // initialize the result as 1
  let result = 1;
  // loop from n to 1, decreasing by 1 each time
  while (n > 0) {
    // multiply the result by n
    result = result * n;
    // decrease n by 1
    n = n - 1;
  }
  // return the final result
  return result;
}

// function to calculate the binomial coefficient of n and r
function combination(n, r) {
  // use the formula: n! / (r! (n - r)!)
  return factorial(n) / (factorial(r) * factorial(n - r));
}

// test the function with n = 5 and r = 3
console.log(combination(5, 3)); // should print 10


//single function////////////////////////////////////////////////////
// function to calculate the combination of n and r
function combination(n, r) {
  // initialize the numerator and denominator as 1
  let numerator = 1;
  let denominator = 1;
  // loop from n to n - r + 1, decreasing by 1 each time
  for (let i = n; i >= n - r + 1; i--) {
    // multiply the numerator by i
    numerator = numerator * i;
  }
  // loop from r to 1, decreasing by 1 each time
  for (let j = r; j >= 1; j--) {
    // multiply the denominator by j
    denominator = denominator * j;
  }
  // return the quotient of the numerator and the denominator
  return numerator / denominator;
}

// test the function with n = 5 and r = 3
console.log(combination(5, 3)); // should print 10


/////recurstion/////
/*This means that the number of ways to choose r items from n items is equal to 
the sum of the number of ways to choose r-1 items from n-1 items and the number of ways 
to choose r items from n-1 items2. To implement this, 
call the function again with n-1 and r-1, and with n-1 and r, and add the results.*/

// function to calculate the combination of n and r using recursion
function combination(n, r) {
  // check the base cases
  if (r === 0 || r === n) {
    return 1;
  }
  // use the recursive case
  return combination(n - 1, r - 1) + combination(n - 1, r);
}

// test the function with n = 5 and r = 3
console.log(combination(5, 3)); // should print 10

