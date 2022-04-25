/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // const minPQ = new MinPriorityQueue()
    
    // time: O(n*log(k))
    // space: O(k)
    // nums.map((num) => {
    //     minPQ.enqueue(num)
    //     if (minPQ.size() > k) {
    //         minPQ.dequeue()
    //     }
    // })
    
    // space: O(1)
    // time: O(1)
    // return minPQ.front().element
    
    const target = nums.length - k
    
    return quickSelect(nums, target)
    
};

var quickSelect = function(arr, target, start = 0, end = arr.length - 1) {
    // if (start < end) {
    let pivot = getPivot(arr, start, end)
    if (pivot === target) return arr[pivot]
    else if (pivot > target) return quickSelect(arr, target, start, pivot - 1)
    else return quickSelect(arr, target, pivot + 1, end)
    // }
    // return arr
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