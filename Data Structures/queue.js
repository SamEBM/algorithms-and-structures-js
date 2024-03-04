class Queue {
    constructor() { 
        this.items = []; 
    } 

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift(); // This is linear O(n)
    }

    peek(){
        return this.isEmpty() ? null : this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    printQueue(){
        let str = 'first';
        for (let i = 0; i < this.items.length; i++) {
            str += ' -> ' + this.items[i];
        }
        console.log(str);
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.printQueue();
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20