function quicksort(arr){
  //Base case: if the array is empty or has one element, return the array
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];
  // Recursive case: choose a pivot element (here we choose the last element)
  let pivot = arr[arr.length - 1];

  // Loop through the array, excluding the pivot element
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] <= pivot){
        left.push(arr[i]);
    } else {
        right.push(arr[i]);
    }
  }


  return [...quicksort(left), pivot, ...quicksort(right)];
}
arr = [-1, -3, 1, 4,7,8,10];
console.log(arr)
let sorted = quicksort(arr);
console.log(sorted);