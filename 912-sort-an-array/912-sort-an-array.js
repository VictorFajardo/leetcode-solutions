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
        let random = getRandom(start, end)
        let pivot = getPivot(arr, random, start, end)
        quickSort(arr, start, pivot - 1)
        quickSort(arr, pivot + 1, end)
    }
    return arr
}

var getPivot = function(arr, random, start, end) {
    swap(arr, random, end)
    let pivot = end
    let swapIndex = end
    
    for (let i = end - 1; i >= 0; i--) {
        if (arr[pivot] < arr[i]) {
            swapIndex--
            swap(arr, swapIndex, i)
        }
    }
    
    swap(arr, swapIndex, end)
    return swapIndex
}

var getRandom = function(start, end) {
    return start + Math.floor((end - start) / 2)
}


var swap = function(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
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