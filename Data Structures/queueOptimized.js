class Queue {
    constructor() { 
        this.items = {}; 
        this.tail = 0;
        this.head = 0;
    } 

    enqueue(element){
        this.items[this.tail] = element;
        this.tail++;
    }

    dequeue(){ // This is now constant O(1)
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;

        return item;
    }

    peek(){
        if (!this.isEmpty()) {
            return this.items[this.head];
        }
        return null;
    }

    isEmpty(){
        return this.tail - this.head === 0;
    }

    size(){
        return this.tail - this.head;
    }

    printQueue(){
        // console.log(this.items);
        let str = 'first';
        for (const [key, value] of Object.entries(this.items)) {
            str += ' -> ' + value;
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