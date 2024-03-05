class Node {
    constructor(value){
        this.value = value;
        this.left = null; // left child node
        this.right = null; // rigth child node
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null; // initialize an empty tree
    }

    insert(value){
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode; // If the tree is empty, just pint the root to this new node
        } else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, node){                         // Root points to the subtree's root node on every recursive call
        if (node.value < root.value) {              // Check left subtree
            if (root.left) {
                this.insertNode(root.left, node);   // If there is a left child then recursively check its children
            } else {
                root.left = node;                   // If there is not a left child then add the node to it
            }
        } else {                                    // Check right subtree
            if (root.right) {
                this.insertNode(root.right, node);  // If there is a right child then recursively check its children
            } else {
                root.right = node;                  // If there is not a right child then add the node to it
            }
        }
    }

    search(value, root = this.root){
        if (!root) { // Tree is empty
            return false;
        } else {
            if (root.value === value) { // If the value of the current root
                return true;
            } else if(value < root.value){ // Check the left subtree
                return this.search(value, root.left);
            } else { // Check the right subtree
                return this.search(value, root.right);
            }
        }
    }

    preorder(root = this.root){
        if(!root){
            return null;
        } else {
            console.log(root.value);
            this.preorder(root.left); // Traverse all the left subtree
            this.preorder(root.right); // Traverse all the right subtree
        }
    }

    inorder(root = this.root){
        if(!root){
            return null;
        } else {
            this.inorder(root.left); // Traverse all the left subtree
            console.log(root.value);
            this.inorder(root.right); // Traverse all the right subtree
        }
    }

    postorder(root = this.root){
        if(!root){
            return null;
        } else {
            this.postorder(root.left); // Traverse all the left subtree
            this.postorder(root.right); // Traverse all the right subtree
            console.log(root.value);
        }
    }

    levelOrder(){ // Breadth First Search (BFS)
        // We can also use the optimized queue implementation here to achieve O(1) time complexity for queue and enqueue operations
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value){
        if (root === null) { // If the subtree is empty
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);      // Look for the given value in the left subtree
        } else if(value > root.value){
            root.right = this.deleteNode(root.right, value);    // Look for the given value in the right subtree
        } else {                                                // This is the value to delete
            if (!root.left && !root.right) {
                return null;                                    // If it is a leaf node, just remove it from the tree
            }
            
            if (!root.left) {                                   // Return the right node if left doesn't exist
                return root.right;
            } else if(!root.right){                              // Return the left node if right doesn't exist
                return root.left;
            }
                                                                // Otherwise, the node has two children 
            root.value = this.min(root.right);                  // Get the smallest node from the right size 
            root.right = this.deleteNode(root.right, root.value); // 
        }
        return root;
    }

    // The smallest value is in the left most node
    min(root = this.root){
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    // The greatest value is in the right most node
    max(root = this.root){
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    isEmpty(){
        return this.root === null;
    }
}

const tree = new BinarySearchTree();
console.log("Is tree empty? ", tree.isEmpty());
console.log("Is 10 present in the Binary Search Tree? ", tree.search(10));

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Is 20 present in the Binary Search Tree? ", tree.search(20));

console.log("Preorder: ");
tree.preorder();

console.log("Inorder: ");
tree.inorder();

console.log("Postorder: ");
tree.postorder();

console.log("Levelorder: ");
tree.levelOrder();

console.log("Max node value: ", tree.max());
console.log("Min node value: ", tree.min());

console.log("Delete 5: ");
tree.delete(50);
tree.levelOrder();