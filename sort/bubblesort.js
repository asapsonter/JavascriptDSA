function bubbleSort (arr){
    let swapped 
    do {
    swapped = false
     for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }

    }
    }while(swapped)
   
}

const arr = [6,3,6,2,1,9,10]
bubbleSort(arr)
console.log(arr)