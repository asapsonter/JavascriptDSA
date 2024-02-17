const obj = {
    name:'sam',
    age:'26',

    myName: function() {
    console.log(this.name)

}
}
delete obj.age
obj.hobby = ' programming'
console.log(obj['age']);
console.log(obj['name']);
console.log(obj);

obj.myName()
// obj.keys() .entries() .values()
