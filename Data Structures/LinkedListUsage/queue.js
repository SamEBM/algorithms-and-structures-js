import LinkedList from "./linkedList.js";
// Added "type": "module" in the package.js to allow the import.

class Queue {
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.removeFromStart();
    }

    peek(){
        return this.list.head ? this.list.head.value : null;
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    printqueue(){
        this.list.printList();
    }
}

const queue = new Queue();
console.log("Queue is empty? ", queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue size: ", queue.getSize());
queue.printqueue();
console.log("Queue peek: ", queue.peek());
console.log("Dequeue: ", queue.dequeue());
queue.printqueue();
