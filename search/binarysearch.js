// // function solution
// function binary(arr, target){
//     // set left & right pointers. 
//     // start index and end index 
//     let left = 0;
//     let right = arr.length - 1;
 
//     while (left <= right) {
//     let mid_index = Math.floor((left + right) / 2); // use mathfloor to avoid decemial value.

//     //check if target is the mid index
//     if (target === arr[mid_index]){
//         return mid_index;
//     }

//     // move the seach to the left side of the array
//     if (target < arr[mid_index]){
//         right = mid_index - 1;
//     } else {
//         left = mid_index + 1;
//     }

//     }
//     return -1;


// }

// console.log(binary([2,4,5,6,7,8,9], 5));
// console.log(binary([2,4,5,6,7,8,9], 9));
// console.log(binary([2,4,5,6,7,8,9], 4));

function recurBinary(arr, target){
    return search(arr, target, 0, arr.length-1);
}

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (target === arr[mid]) {
    return mid;
  }
  if (target < arr[mid]) {
    return search(arr, target, left, mid - 1); //notice to need to return mid , not left
  } else {
    return search(arr, target, mid + 1, right);
  }
  //because it is recursive you dont have to return it because search func is called in the main function
}



console.log(recurBinary([2, 4, 5, 6, 7, 8, 9], 5));
console.log(recurBinary([2, 4, 5, 6, 7, 8, 9], 9));
console.log(recurBinary([2, 4, 5, 6, 7, 8, 9], 4));