function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let swapped = false; //set bool to false, if true means all el's sorted. loop breaks and arr returned. 
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return arr;
  }

module.exports = bubbleSort;