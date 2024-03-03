/*
    Quick sort is a divide-and-conquer algorithm. The algorithm can be broken down into three main steps:

    1.- Choose a pivot element from the array.
    2.- Partition the array into two subarrays, one containing elements smaller than the pivot, and the other containing elements larger than the pivot.
    3.- Recursively apply the quick sort algorithm to the two subarrays until the entire array is sorted.
*/


// Worst time complexity: O(n^2)
// Average time complexity: O(nlog(n))
// First, we’ll divide the array into two sub-arrays recursively, which will cost a time complexity of O(log(n)). 
// For each function call, we are traversing through the array, which costs O(n) time complexity. 
// Hence the total time complexity is O(nlogn).

// Good if you don't have space complexity constraints since we are creating two arrays on each call.

function quickSort(arr) {
    if(arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) { // We use arr.lenght - 1 because the last element is the pivot
        if (arr[i] < pivot) { // Change the sign to sort the array in descending order
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const numbers = [-6,20,8,-2,4];
console.log(quickSort(numbers));

// Using the first element as the pivot
function quickSort2(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) { // We use i = 1 because the first element is the pivot
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}