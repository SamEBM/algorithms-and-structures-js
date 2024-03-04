class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null; // Head pointer will always point to the first element
        this.tail = null; // Tail pointer will always point to the last element
        this.size = 0;
    }

    prepend(value){ // Time complexity O(1)
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node; // head -> newNode
            this.tail = node; // newNode <- tail
        } else {
            node.next = this.head; // newNode -> oldNode <- tail
            this.head = node; // head -> newNode -> oldNode <- tail
        }

        this.size++;
    }

    append(value){ // Time complexity O(1) thanks to the tail
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node; // head -> newNode
            this.tail = node; // newNode <- tail
        } else { // Similarly to prepend but using the tail
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    insertAt(value, index){ // Time complexity O(n)
        if (index < 0 || index > this.size) { // Fails if the index is incorrect
            return -1;
        } else if(index === 0){
            this.prepend(value);
        } else if(index === this.size){
            this.append(value);
        } else{
            const node = new Node(value);
            let prevNode = this.head;

            // Loop until prevNode is the node prior to the index where the new node will be inserted
            for (let i = 0; i < index - 1; i++) {
                prevNode = prevNode.next;
            }

            node.next = prevNode.next; // New node must point to the next node of the previous node
            prevNode.next = node; // Previous node now points to the new node
            this.size++;
        }
    }

    indexOf(value){ // Time complexity O(n)
        if (!this.isEmpty()) {
            let currentNode = this.head;
            let index = 0;
            while(currentNode) { // While currentNode points to a valid node and not "null"
                if (currentNode.value === value) {
                    return index;
                }
                currentNode = currentNode.next;
                index++;
            }
            return -1;
        } else {
            return -1;
        }
    }

    removeFromStart(){
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    removeFromEnd(){
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;

            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }


    isEmpty(){
        return this.size == 0;
    }

    getSize(){
        return this.size;
    }

    printList(){
        if (!this.isEmpty()) {
            let currentNode = this.head;
            let str = 'head';
            while(currentNode) { // While currentNode points to a valid node and not "null"
                str += ' -> ' + currentNode.value;
                currentNode = currentNode.next;
            }

            console.log(str + ' <- tail');
        } else {
            console.log("The queue is empty");
        }
    }
}

const list = new LinkedList();
console.log("Is it empty? ", list.isEmpty());
console.log("List size: ", list.getSize());
list.printList();

list.append(10);
list.append(20);
list.append(30);

console.log("List size: ", list.getSize());
list.printList();

list.prepend(100);
list.prepend(200);
list.printList();

list.insertAt(50, 3);
console.log("List size: ", list.getSize());
list.printList();

console.log("Index of 100: ", list.indexOf(100));
console.log("Index of 50: ", list.indexOf(50));

console.log("Remove from head: ", list.removeFromStart());
console.log("Remove from tail: ", list.removeFromEnd());
list.printList();
