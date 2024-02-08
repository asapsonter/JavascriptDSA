let n = [2, 3, 4, 5, 6, 8, 9];
for (let i = 0; i < n.length; i++) {
  n = n[i + 1] + n[i + 2];
}
console.log(n);
