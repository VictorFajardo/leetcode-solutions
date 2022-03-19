/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    
    while (start <= end) {
        let mid = Math.floor((end + start) / 2)
        let num = nums[mid]
        if (num === target) return mid
        else if (num > target) end = mid - 1
        else start = mid + 1
    }
    
    return -1
};

// Binary Search
// time complexity: O(log(n))
// space complexity: O(1)