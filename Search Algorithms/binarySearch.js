/* 
    Given a SORTED array of 'n' elements and a target element 't', find the index of 't' in the array. 
    Return -1 if the target element is not found. 
*/

// Time complexity: O(log(n))
// The size of the input is reduced by half on every iteration

function binarySearch(arr, target){
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex;
        }

        if (target < arr[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }

    return -1;
}

console.log("\n Binary Search iterative: ");
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 6)); // 5
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11)); // -1
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10)); // 9


// Time complexity: O(log(n))
// The recursive function will be executed at most O(log(n)) times

function binarySearchRecursive(arr, target, start, end){
    const middleIndex = Math.floor((start + end) / 2);

    if (start > end) return -1;

    if (target === arr[middleIndex]) return middleIndex;
    if (target < arr[middleIndex]) return binarySearchRecursive(arr, target, start, middleIndex - 1);
    if (target > arr[middleIndex]) return binarySearchRecursive(arr, target, middleIndex + 1, end);
}

console.log("\n Binary Search recursive: ");
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearchRecursive(arr, 12, 0, arr.length - 1)); // -1
console.log(binarySearchRecursive(arr, 1, 0, arr.length - 1)); // 0
console.log(binarySearchRecursive(arr, 10, 0, arr.length - 1)); // 9