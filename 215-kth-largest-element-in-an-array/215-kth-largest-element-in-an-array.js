/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const target = nums.length - k
    
    return quickSelect(nums, target)
};

var quickSelect = function(arr, target, start = 0, end = arr.length - 1) {
    let random = getRandom(start, end)
    let pivot = getPivot(arr, random, start, end)
    if (pivot === target) return arr[pivot]
    else if (pivot > target) return quickSelect(arr, target, start, pivot - 1)
    else return quickSelect(arr, target, pivot + 1, end)
}

var getPivot = function(arr, random, start, end) {
    [arr[random], arr[end]] = [arr[end], arr[random]]
    let pivot = end
    let swapIndex = end
    
    for (let i = end - 1; i >= 0; i--) {
        if (arr[pivot] < arr[i]) {
            swapIndex--
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
        }
    }
    
    [arr[swapIndex], arr[end]] = [arr[end], arr[swapIndex]]
    return swapIndex
}

var getRandom = function(start, end) {
    return start + Math.floor((end - start) / 2)
}
// Quick Select
// time complexity: O(n)
// space complexity: O(n)

/*
var findKthLargest = function(nums, k) {
    const minPQ = new MinPriorityQueue()
    
    // time: O(n*log(k))
    // space: O(k)
    nums.map((num) => {
        minPQ.enqueue(num)
        if (minPQ.size() > k) {
            minPQ.dequeue()
        }
    })
    
    // space: O(1)
    // time: O(1)
    return minPQ.front().element
    
};
*/

// Piority Queue
// time complexity: O(n*log(k))
// space complexity: O(k)