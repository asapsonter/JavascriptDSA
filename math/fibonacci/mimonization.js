function mimoFib( n , mimo={}){
    // if store recursion step is already stored
    if(mimo[n]){
        return mimo[n];
       // return if the value of is < 2
    } else if (n===1 || n==0){
        return 1;

    }
    //call the function again in smaller peice and pass to mimo object
    let result = mimoFib(n-1, mimo) + mimoFib(n-2, mimo);
    // point the object to result
    mimo[n] = result ;

    return result;

}

console.log(mimoFib(7))