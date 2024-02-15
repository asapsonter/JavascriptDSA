function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let hash = "#".repeat(i);
    console.log(space + hash);
  }
}
