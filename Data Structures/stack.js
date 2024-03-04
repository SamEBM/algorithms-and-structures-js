class Stack { 
    // Array is used to implement stack 
    constructor() { 
        this.items = []; 
    } 

    push(element) { 
        // push element into the items 
        this.items.push(element); 
    } 

    pop() { 
        // return top most element in the stack and removes it from the stack 
        // -1 if stack is empty 
        if (this.items.length == 0) 
            return "-1"; 
        return this.items.pop(); 
    } 

    peek() { 
        // return the top most element from the stack but doesn't delete it. 
        return this.items[this.items.length - 1]; 
    } 

    isEmpty() { 
        // return true if stack is empty 
        return this.items.length == 0; 
    } 
    
    printStack() { 
        let str = ""; 
        for (let i = 0; i < this.items.length; i++){
            str += this.items[i] + " "; 
        }
        str += "<- top";
        return str; 
    } 
} 

// creating object for stack class 
let stack = new Stack(); 

// testing isEmpty and pop on an empty stack 
console.log(stack.isEmpty()); // true
console.log(stack.pop()); // -1

// Adding elements to the stack 
stack.push(10); 
stack.push(20); 
stack.push(30); 

// Printing the stack elements
// prints [10, 20, 30] 
console.log(stack.printStack()); 