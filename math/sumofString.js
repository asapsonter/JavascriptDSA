function sumString (n){
    //store sum
    let answer = 0
    // change input to string and split to single characters
    let arr = n.toString().split("").reverse();
    // loop arr
    for (let i = 0; i < arr.length; i++){
        answer = answer + Number(arr[i]);
    }
    return answer;

    
}

console.log(sumString([234]));