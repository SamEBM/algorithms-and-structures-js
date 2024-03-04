class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null; // Head pointer will always point to the first element
        this.size = 0;
    }

    prepend(value){ // Time complexity O(1)
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node; // head -> newNode
        } else {
            node.next = this.head; // newNode -> oldNode
            this.head = node; // head -> newNode -> oldNode
        }

        this.size++;
    }

    append(value){ // Time complexity O(n). This can be improved by using a "tail" pointer
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node; // head -> newNode
        } else {
            let currentNode = this.head;

            while(currentNode.next){ // Find the last element and make it point to the new node
                currentNode = currentNode.next; // head -> firtsNode -> secondNode -> null
            }

            currentNode.next = node; // head -> firtsNode -> secondNode -> newNode
        }
        this.size++;
    }

    insertAt(value, index){ // Time complexity O(n)
        if (index < 0 || index > this.size) { // Fails if the index is incorrect
            return -1;
        } else if(index === 0){
            this.prepend(value);
        } else {
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

    removeAt(index){
        let removedNode;
        if (index < 0 || index >= this.size) { // Fails if the index is incorrect
            return -1;
        } else if(index === 0){
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prevNode = this.head;

            // Loop until prevNode is the node prior to the index to remove
            for (let i = 0; i < index - 1; i++) {
                prevNode = prevNode.next;
            }

            removedNode = prevNode.next; // Get the node which will be removed
            prevNode.next = prevNode.next.next; // Previous node to the index must now point to the next node
        }

        this.size--;
        return removedNode;
    }

    removeValue(value){        
        if (this.isEmpty()) { // No nodes in the list
            return null;
        } else if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let currentNode = this.head;

            // Loop until currentNode is the node prior to the index of the node containing the given value
            while(currentNode.next && currentNode.next.value !== value){
                currentNode = currentNode.next;
            }

            // If the value was found
            if (currentNode.next) {
                currentNode.next = currentNode.next.next; // Previous node to the value must now point to the next node
                this.size--;
                return value;
            } else {
                return null;
            }
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

    reverse(){
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode) {
            const nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.head = previousNode;
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

            console.log(str);
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

console.log("Remove node at index 10: ", list.removeAt(7));
console.log("Remove node at index 3: ", list.removeAt(3));
list.printList();

console.log("Remove value 1000: ", list.removeValue(1000));
console.log("Remove value 100: ", list.removeValue(100));
list.printList();

console.log("Index of 10: ", list.indexOf(10));
console.log("Index of 50: ", list.indexOf(50));

list.reverse();
list.printList();