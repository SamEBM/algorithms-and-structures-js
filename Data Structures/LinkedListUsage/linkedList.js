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

export default LinkedList;

// const list = new LinkedList();
// console.log("Is it empty? ", list.isEmpty());
// console.log("List size: ", list.getSize());
// list.printList();

// list.append(10);
// list.append(20);
// list.append(30);

// console.log("List size: ", list.getSize());
// list.printList();

// list.prepend(100);
// list.prepend(200);
// list.printList();

// console.log("Remove from head: ", list.removeFromStart());
// console.log("Remove from tail: ", list.removeFromEnd());
// list.printList();
