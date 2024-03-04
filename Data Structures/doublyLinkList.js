// Doubly Linked list Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // To link the next Node
        this.prev = null; // To link the previous Node
    }
}

class DoublyLinkedList {
    // Constructor to create a new linked list
    constructor() {
        this.head = null; // Head pointer will always point to the first element
        this.tail = null; // Tail pointer will always point to the last element
        this.size = 0;
    }

    // Method to add item at the last of doubly linked list
    append(val) {

        // Create a temporary variable
        let temp = new Node(val);

        // If the list is empty link assign
        // new node to both head and tail
        if (this.isEmpty()) {
            this.head = temp;
            this.tail = temp;
        }

        // else add item to the tail and shift tail
        else {
            this.tail.next = temp;
            this.tail = this.tail.next;
        }

        this.size++;
    }

    // To check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    printList(){
        if (!this.isEmpty()) {
            let currentNode = this.head;
            let str = 'head -> ';
            while(currentNode) { // While currentNode points to a valid node and not "null"
                str += currentNode.value + ' ';
                currentNode = currentNode.next;
            }

            console.log(str + '<- tail');
        } else {
            console.log("The queue is empty");
        }
    }
}

// Create new Doubly Linked List 
const dll = new DoublyLinkedList();

// Add elements in the list
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);

// Display the list
dll.printList();