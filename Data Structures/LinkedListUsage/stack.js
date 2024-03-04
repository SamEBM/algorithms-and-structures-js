import LinkedList from "./linkedList.js";
// Added "type": "module" in the package.js to allow the import.

class Stack {
    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
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

    printStack(){
        this.list.printList();
    }
}

const stack = new Stack();
console.log("Stack is empty? ", stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack size: ", stack.getSize());
stack.printStack();
console.log("Stack peek: ", stack.peek());
console.log("Stack pop: ", stack.pop());
stack.printStack();
