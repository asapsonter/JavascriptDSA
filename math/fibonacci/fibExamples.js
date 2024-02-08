// const  fibonacci = (n) => {
//     const fib = [1, 2]
//     for (let i = 2; i< n; i++) {
//         fib[i] = fib[i - 1] + fib[i-2]
//     } 
//     return fib
// }

// console.log(fibonacci(8));


// function fibonacci(n){
//     if (n <= 1){
//         return n;
//     }
//     return fibonacci(n-1) + fibonacci(n-2); 
// }



// function fibonacci(n){
//     //base case
//     if (n == 0) return 0;
//     if (n == 1) return 1;

//     return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log(fibonacci(4));
// function RecursiveFibonacci(n){
//     //base case
//     if (n < 2) return n;

//     return RecursiveFibonacci(n - 1) + RecursiveFibonacci(n - 2);
// }
// console.log(RecursiveFibonacci(1));
// console.log(RecursiveFibonacci(2));
// console.log(RecursiveFibonacci(6));
// A function that returns the nth Fibonacci number using recursion
function fib(n) {
  // Base case: if n is 0 or 1, return n
  if (n === 0 || n === 1) {
    return n;
  }
  // Recursive case: if n is greater than 1, return the sum of the previous two Fibonacci numbers
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

// Test the function
let n = 10;
console.log(`The ${n}th Fibonacci number is ${fib(n)}`);


//or 
// function fib(n) {
//   // Base case: if n is 0 or 1, return n
//   if (n < 2) {
//     return n;
//   }
//   // Recursive case: if n is greater than 1, return the sum of the previous two Fibonacci numbers
//   else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

