function powerOf2(n){
    // check if num is positive integer
    if (n < 1 ) {return false;}

    // looop should run as long as n > 1
    while (n > 1){
        // if n is divded by 2 with a remainder return false
        if (n % 2  !== 0) {return false;}
         n = n / 2;
    }
    // exit loop return true
    return  true;
}


function isPowerOf2Bitwise(n){
    if (n < 1) {return false;}
    return (n & (n-1)) === 0 ;
}
// big O is O(1)

console.log(powerOf2(1));
console.log(powerOf2(2));
console.log(powerOf2(4));
console.log(powerOf2(5));
console.log(powerOf2(11));

// big O of O(log(n)) because the size increases as n grows but not the size of same amount
