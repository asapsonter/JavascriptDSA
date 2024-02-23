//initiate Stack class
class Stack {

    //set constructor
    constructor(){
        //default size set 0
        this.count =0
        this.storage = {}
    }

    //add items to the end of the stack
    push(element){
        this.storage[this.count] = element
        //increment count when element is 
        this.count++
    }

    //remove and return the last element
    pop(){
        //check of stack is empty
        if(this.count === 0){
            return undefined
        }
        
        let result = this.storage[this.count -1]
        delete this.storage[this.count-1]
        this.count--

        return result
    }

    size(){
        return this.count
    }
    isEmpty(){
        return this.count === 0
    }

    peek(){
        return this.storage[this.count -1]
    }


    print(){
        // print storage content 
        console.log(this.storage)
    }
}

let stack = new Stack()
stack.push(2)
stack.push(4)
stack.push(6)
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.size())
stack.print()