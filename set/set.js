// sets does not take dublicates
// set doesnt add items in order
// sets are iteratble
const set = new Set([1,2,3,4]);
set.add(7)
//set.delete
//set.has(2)
//set.clear()
//set.size -> console.log it 

for (let items of set ){
    //console.log(set);
    console.log(items);
}