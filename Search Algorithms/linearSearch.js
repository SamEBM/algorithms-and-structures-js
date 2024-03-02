/* 
    Given an array of 'n' elements and a target element 't', find the index of 't' in the array. 
    Return -1 if the target element is not found. 
*/

// Time complexity: O(n)

function linearSearch(arr, t){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == t) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 5)); // 4
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 11)); // -1
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 10)); // 9