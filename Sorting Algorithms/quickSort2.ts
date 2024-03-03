function quickSortTypeScript(arr: Array<number>): Array<number> {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortTypeScript(left), pivot, ...quickSortTypeScript(right)];
}

const numbersArray = [-6,20,8,-2,4,3,-1,-50,100,32,77];
console.log(quickSortTypeScript(numbersArray));