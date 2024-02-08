//nPr = n! = n / (n-3);
// N = num of items ; r num of pairs  eg: 6P3 = 6! / (6 - 3)!


/*function factorial(n){
    let result = 1;
    while(n > 0){
        result = result * n;
        n = n-1;
    }
    return result;
}


function cal_pairs(n) {
  
  if(n < 2) {
    return n;
  }

  return factorial(n) / factorial(n - 2);
}
console.log(cal_pairs([6]));*/

// getting an array of factors of n
function factorsOf(n){
    // declare emtpy array to store factors
    let factors = []
    //loop through n
    for(let i=1; i <= n; i++){
        //check if number in loop is a factor of n
        if(n%i===0){
            //push factors to empty list
        factors.push(i);
        }
    }
    return factors
}
console.log(factorsOf(5));
