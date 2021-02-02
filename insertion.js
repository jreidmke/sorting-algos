function insertionSort(arr, l=arr.length) {
    if(l <= 1) return arr;

    let last = arr[l - 1];
    let currIdx = l-2;

    insertionSort(arr, l-1);

    while(currIdx >= 0 && arr[currIdx] > last) {
        arr[currIdx + 1] = arr[currIdx]; 
        currIdx -= 1; 
        arr[currIdx+1]=last
    }; 
    return arr;
}

module.exports = insertionSort;
