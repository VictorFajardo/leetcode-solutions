/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // return mergeSort(nums)
    return quickSort(nums)
};

// QuickSort
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 

//Merge Sort
var mergeSort = function(array) {
    if (array.length === 1) return array
    const mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    
    return merge(mergeSort(left), mergeSort(right))
}

var merge = function(left, right) {
    const merged = []
    let leftIndex = 0
    let rightIndex = 0
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex])
            leftIndex++
        } else {
            merged.push(right[rightIndex])
            rightIndex++
        }
    }
    
    while (leftIndex < left.length) {
        merged.push(left[leftIndex])
        leftIndex++        
    }
    
    while (rightIndex < right.length) {
        merged.push(right[rightIndex])
        rightIndex++        
    }
    
    return merged
}