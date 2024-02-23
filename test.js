// //pop
// //size
// //length
// //isEmpty
// //push
// //peek

// class Stack {

//   constructor(){
//     this.items = []
//   }

//   push(element){
//     this.items.push(element)
//   }

//   size(){
//     return this.items.length
//   }
//   peek(){
//     return this.items[this.items.length -1]
//   }

//   pop(){
//     return this.items.pop()
//   }

//   isEmpty(){
//     // if(this.items.length === 0){
//     //   return true
//     // }{
//     //   return false
//     // }
//     return this.items.length === 0;
//   }

//   print(){
//     console.log(this.items.toString())
//   }
// }

class Stack {
  constructor(){
    this.items = {}
    this.head = 0;

  }

  push(element){
    this.items[this.head] = element;
    this.head++
  }

  pop(){
    if (this.head === 0){
      return undefined;
    }
    
   let  result = this.items[this.head -1]
   delete this.items[this.head-1]
    this.head--;

    return result
  }
  peek(){
    return this.items[this.head -1]
  }

  size(){
    return this.head
  }
  isEmpty(){
    return this.items.head === 0;
  }

  print(){
    console.log(this.items)
  }
}

let stack = new Stack();

stack.push(10)
stack.push(20)
stack.push('hey')
stack.push(true)
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
//console.log(stack.pop())

stack.print();

//console.log(stack.pop());





