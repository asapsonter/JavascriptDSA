/*The forEach() method in JavaScript is a way to 
execute a function for each element of an array. 
The function can perform any kind of operation on the elements, 
but it does not return any value. 
The forEach() method does not change the original array, 
but it may change the values of its elements*/

const fruits = ["apple", "banana", "orange"];

function printElements(index, name){
    console.log(`${index}: ${name}`)
}
fruits.forEach(printElements);
