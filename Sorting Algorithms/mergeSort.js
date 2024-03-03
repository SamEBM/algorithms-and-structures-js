// Time complexity: O(nlog(n))

function mergeSort(arr = []){
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2); // 7 -> 3.5 -> 3
        
    const left = mergeSort(arr.slice(0, middle)); // left [0,3)
    const right = mergeSort(arr.slice(middle)); // right [3, 7]

    return merge(left, right);
}

function merge(left = [], right = []) {
    const sortedArr = [];
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr. Shift also removes the first item of the left or right array.
        if (left[0] < right[0]) { // Change the sign to sort in descending order
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    // Use spread operators to create a new array, combining the three arrays and any remaining items
    return [...sortedArr, ...left, ...right];
}

const numbers = [-6,20,8,-2,4];
console.log(mergeSort(numbers));