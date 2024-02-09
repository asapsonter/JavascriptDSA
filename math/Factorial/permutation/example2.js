// N = num of items ; r num of pairs  eg: 6P3 = 6! / (6 - 3)!

function permutation(n) {
  //if array lenght is empty return empty array
  if (!n.length) {
    return [];
  }

  if (n.length === 1) {
    return [n];
  }

  // intialize empty array
  let result = [];

  // loop through the whole arr
  for (let i = 0; i < n.length; i++) {
    //remove the current element from arr
    let element = n[i];
    let rest = n.slice(0, i).concat(n.slice(i + 1));

    // recursively find the permutations of the rest of the list
    let sub_permutations = permutation(rest);
    // add the current element to the beginning of each sub-permutation
    for (let sub_permutation of sub_permutations) {
      result.push([element].concat(sub_permutation));
    }
  }
  return result;
}
console.log(permutation(["A", "B", "C"]));
