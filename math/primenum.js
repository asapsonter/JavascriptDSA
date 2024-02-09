// A function that tells you if a number is prime or not
function primeNum(n) {
  // If the number is less than 2, it is not prime
  if (n < 2) {
    return false;
  }
  // Check every number from 2 to n-1
  for (let i = 2; i < n; i++) {
    // If the number can be divided by i without any leftover, it is not prime
    if (n % i === 0) {
      return false;
    }
  }
  // If none of the numbers can divide it, it is prime
  return true;
}

// Print the answers for some numbers
console.log(primeNum(2));
console.log(primeNum(4));
console.log(primeNum(5));
console.log(primeNum(8));


