// Factorial of a non-negative integer 'n' is the product of all positive integers less than or equal to 'n
// Example: 5! = 5*4*3*2*1

// Time complexity -> O(n)

function factorial(n){
    let result = 1;

    for (let index = 2; index <= n; index++) {
        result = result * index;
    }

    return result;
}

// Example n = 5
// index = 2   result = 1 * 2
// index = 3   result = 2 * 3
// index = 4   result = 6 * 4  
// index = 5   result = 24 * 5 

console.log("\nIterative factorial: ");
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));


// Time complexity -> O(n)
// The function it's called n times

function factorialRecursive(n){
    // Base case
    if (n == 0 || n == 1) return 1;

    return n * factorialRecursive(n - 1);  // n! = n * (n-1)!    For example: 5! = 5 * 4!
}

console.log("\nRecursive factorial: ");
console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));