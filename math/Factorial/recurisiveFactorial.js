// formula n = n*(n-1)
function recursionFactor(n){
    // base case. set to 1 as the first factor
    if(n == 0){
        return 1;
    };
    // call recursion
    return  n * recursionFactor(n-1);
}

console.log(recursionFactor(5));
console.log(recursionFactor(9));