// this takes a part of and returns it. 
let arr = [2, 3, 4, 6, 8, 9];
function slicefunc(arr) {
  console.log(arr);
  const getFirst = arr.slice(0, 2);

  return getFirst;
}

console.log(slicefunc(arr));
