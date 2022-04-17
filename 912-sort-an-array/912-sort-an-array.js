/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // return mergeSort(nums)
    return quickSort(nums)
};

// QuickSort
var quickSort = function(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivot = getPivot(arr, start, end)
        quickSort(arr, start, pivot - 1)
        quickSort(arr, pivot + 1, end)
    }
    return arr
}

var getPivot = function(arr, start, end) {
    let pivot = arr[start]
    let swapIndex = start
    
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
        }
    }
    
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    return swapIndex
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