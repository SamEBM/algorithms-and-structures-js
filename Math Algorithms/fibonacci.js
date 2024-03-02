// Time complexity -> O(n)

function fibonacci(n){
    const fib = [0, 1];
    
    for (let index = 2; index < n; index++) {
        fib[index] = fib[index - 1] + fib[index - 2];
    }

    return fib;
}

console.log("\nFibonacci sequence: ");
console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(20)); // [0, 1, 1, 2, 3, 5, 8, 13, 21 ...]


// Given a number 'n', find the nth number in the Fibonacci sequence:
// Time complexity: O(2^n)
// Recursive complexity is usually O(branches^depth) where branches is the number of recursive calls

console.log("\nFibonacci numbers: ");
function fibonacciRecursive(n){
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6)); // [0, 1, 1, 2, 3, 5, 8]