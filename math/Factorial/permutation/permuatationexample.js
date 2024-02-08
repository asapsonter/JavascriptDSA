/*Suppose you have a locker with a combination lock. The lock has 10 digits (0 to 9), 
and the combination includes three digits. You’re trying to crack the code. How many possible combinations are there?
In this case, the order of the digits matters (for example, 123 is different from 321),
 so it’s a permutation problem. The number of permutations of n items taken r at a time is given by nPr = n! / (n-r)!.
Here, n = 10 (digits 0-9) and r = 3 (three digits in the combination)**/

//calculate number of pairs in a number.

/*Please note that this formula can lead to unexpected results if n is 0 or 1, as n-1 would be negative in those cases. 
Always ensure that n is greater than 1 when using this formula.*/
function cal_pairs(n){
    //check if n is 0 or 1
    if (n < 2){
        return n;
    }

    return n * (n-1)/2
}
console.log(cal_pairs(5))


//permuatio