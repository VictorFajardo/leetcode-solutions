/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // time: O(log(n))
    nums.sort((a, b) => a - b)
    
    // space: O(1)
    // time: O(1)
    return nums[nums.length - k]
    
};