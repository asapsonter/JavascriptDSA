// formula  n = n*(n-1)

// function factor(n){
//     let result = 1;
// for (let i = 2; i <= n; i++){
//     result =  result * i;
// }
// return result;
// }

// console.log(factor(1));
// console.log(factor(3));
// console.log(factor(5));


// The function factor takes a parameter n and returns the factorial of n. 
// The factorial of a number is the product of all positive integers 
//less than or equal to that number. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. 
//The factorial of 0 and 1 is 1 by definition1.

// The function factor uses a variable called 
// result to store the factorial value. It initializes result to 1, 
// which is the base case for the factorial. Then it uses a for loop to
// iterate from 2 to n, multiplying result by each i in the loop. This way, 
// result accumulates the product of all the numbers from 1 to n. Finally, the function returns result as the factorial of n.

// The code also uses console.log to print the output of the 
// function for some values of n. For example, console.log(factor(1)) prints 1,
//  because the factorial of 1 is 1. Similarly, console.log(factor(3)) prints 6, because the factorial 
//of 3 is 3 * 2 * 1 = 6. And console.log(factor(5)) prints 120, because the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


//or use this method 
function recursion(n){
    //basecase, if n is zero return 1. because one is the base first factor.
    let result = 1; 
    // loop through from n to 1
    while(n > 0){
        // multiply result by n
        result = result * n;
        //decrease n by 1
        n = n -1;
    }

    return result;
  
}

console.log(recursion(3))