// FUNCTION linear_search (LIST, TARGET)
//   SET INDEX to 0
//   REPEAT
//     IF LIST[INDEX] = TARGET THEN
//       RETURN INDEX
//     END IF
//     INCREMENT INDEX
//   UNTIL INDEX = LENGTH (LIST)
//   RETURN -1
// END FUNCTION

function linear (arr, target) {
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target){
    
  return i
  }
  }
  return -1;
}
function linear_search(list , n ,target){


for (let i = 0; i < n; i++){
  if (list[i] == target) {
    return i;
  }
  

}
return -1;
}
list = [1,2,3,4,5,];
target = 3;
n = list.length;

let result = linear_search(list, n, target);
console.log(result);



