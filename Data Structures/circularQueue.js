class CircularQueue {
    constructor(capacity) { 
        this.items = new Array(capacity); 
        this.capacity = capacity;
        this.currentLength = 0;
        this.tail = -1;
        this.head = -1;
    } 

    enqueue(element){
        if (!this.isFull()) {
            this.tail = (this.tail + 1) % this.capacity;  // Example -> capacity = 5 -> If tail = 4 -> tail++ = 5 and this index does not exist, therefore modulus is used to get the remaining index, 0, in this case.
            this.items[this.tail] = element;
            this.currentLength++;

            if (this.head === -1) {
                this.head = this.tail; // If this is the first inserted element, then head points to the same element
            }
        } else{
            return -1; // The queue is full
        }
    }

    dequeue(){
        if (!this.isEmpty()) {
            const item = this.items[this.head];
            this.items[this.head] = null;
            this.head = (this.head + 1) % this.capacity; // If it reaches the end, it restarts at 0, just like in the queue operation.
            this.currentLength--;

            if(this.isEmpty()){ // If that was the last element, we reset the queue
                this.head = -1;
                this.tail = -1;
            }

            return item;
        } else {
            return null // The queue is empty
        }
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    peek(){
        if (!this.isEmpty()) {
            return this.items[this.head];
        }
        return null;
    }

    printCircularQueue(){
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let str = 'head ->';
            let i;

            for (i = this.head; i !== this.tail; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' ';
            }

            str += this.items[i] + '<- tail';

            console.log(str);
        }
    }
}

const queue = new CircularQueue(5);
console.log("Is it empty? ", queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log("Is it full? ", queue.isFull());

queue.printCircularQueue();
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20

queue.enqueue(60);
queue.printCircularQueue();