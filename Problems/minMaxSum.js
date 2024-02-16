// this functions find this the min sum of the 4 arr values 
// in array and also the max sum value
function miniMaxSum(arr) {
  
  arr.sort((a, b) => a - b);
  let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
  let maxSum = arr.slice(1, 6).reduce((a, b) => a + b, 0);

  console.log(minSum, maxSum);
}
