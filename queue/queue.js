//the law of first in first out.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty(){
    return this.items.length === 0;
  }
  size(){
    return this.items.length;
  }
  print(){
    console.log(this.items.toString())
  }
}



const queue = new Queue();




queue.peek()
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(30);
queue.enqueue(50);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();

console.log(queue);




