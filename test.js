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


let arr = [1,2,3,4,5,6]
arr.unshift('sam')
arr.pop()
arr.shift()
arr.push(8)
for (const items of arr){
  console.log(items);
}


