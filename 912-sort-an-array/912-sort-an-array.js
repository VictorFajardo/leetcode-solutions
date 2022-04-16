/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    return mergeSort(nums)
};

var mergeSort = function(array) {
    if (array.length == 1) return array
    
    //divide the array in 2 halves
    let mid = Math.floor(array.length / 2)
    
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

var merge = function(left, right) {
    const res = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex])
            leftIndex++
        } else {
            res.push(right[rightIndex])
            rightIndex++
        }
    }
    
    while (leftIndex < left.length) {
        res.push(left[leftIndex])
        leftIndex++
    }
    
    while (rightIndex < right.length) {
        res.push(right[rightIndex])
        rightIndex++
    }
    
    return res
}