// Given an array of integers, sort the array.
// Time complexity is O(n^2) due to the nested loops

function bubbleSort(arr){
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) { // We use arr.length - 1 because we compare/swap until the last two elements 'i' and 'i + 1'
            if (arr[i] > arr[i + 1]) { // Change the sign to sort in descending order
                let aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const numbers = [-6,20,8,-2,4];
console.log(bubbleSort(numbers));