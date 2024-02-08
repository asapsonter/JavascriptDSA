//N! N = N[n-1] + N[n-2] or F n = F n-1 + F n-2 
// this function gets the list of n fibonnaci sequence.
function fibonacci(n){

   let fib = [0,1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2] 
    }
    return fib;

}
console.log(fibonacci(8))
