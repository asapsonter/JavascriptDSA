class Node {
  //intialize a node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  //initialize linked list head and size
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    //new node instance
    const node = new Node(value);
    //check if linked list is empty
    //set node head
    if (this.isEmpty()) {
      this.head = node;
    } else {
     node.next = this.head; 
     this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let current = this.head;
      let list = "";
      while (current) {
        list += `${current.value}->`;
        current = current.next;
      }
      console.log(list);
    }
  }
}

const l = new LinkedList();
console.log("list is empty", l.isEmpty());
console.log("list size", l.getSize());
l.prepend(10);
l.prepend(20);

l.print()
