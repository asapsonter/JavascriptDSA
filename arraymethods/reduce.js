let array = [1, 2, 3, 4];
let sum = array.reduce(function (total, value) {
  return total + value;
}, 0);

console.log(sum); // Outputs: 10
