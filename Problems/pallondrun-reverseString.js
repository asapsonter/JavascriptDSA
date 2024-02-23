function reverseString(word){
    let rword = ''
    let letter = []
    word.replace(/"/g, "");
    //put string in a stack
    for( let i = 0; i < word.length; i++){
        letter.push(word[i]);
        

    }

    for ( let i = 0; i < word.length; i++){
        rword +=letter.pop()
    }
    if (rword === word){
       console.log('its a pallodrum')
    } else {
      console.log("its not a pallodrum");   
    }
    return rword
    
}

let word = "racecar"
console.log(reverseString(word));