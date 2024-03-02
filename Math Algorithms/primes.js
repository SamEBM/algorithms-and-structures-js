// Un numero primo es aquel que sólo puede dividirse entre sí mismo o entre 1.
// Time complexity: O(n)

function isPrime(n){
    if(n<2) return false;

    for (let i = 2; i < n; i++) { // Any number can be divided into 1, that's why it starts at 2.
        if (n%i === 0 ) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
console.log(isPrime(997)); // true


// Time complexity: O(sqrt(n))

function isPrimeOptimal(n){
    if(n<2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i === 0 ) {
            return false;
        }
    }

    return true;
}

console.log(isPrimeOptimal(1)); // false
console.log(isPrimeOptimal(5)); // true
console.log(isPrimeOptimal(4)); // false
console.log(isPrimeOptimal(997)); // true