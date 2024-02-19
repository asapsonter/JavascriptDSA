function tower(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`move disc 1 from ${fromRod} to ${toRod}`);
    return;
  }
  tower(n - 1, fromRod, usingRod, toRod);
  console.log(`move disk ${n} from ${fromRod} to ${toRod}`);
  tower(n - 1, usingRod, toRod, fromRod);
}

tower(3, "A", "C", "B");
