/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const n = nums.length
    let left = 0
    let right = n - 1
    let min = Infinity
    let max = -Infinity
    
    for (; left < n - 1; left++) {
        if (nums[left] > nums[left + 1]) break
    }
    
    if (left === n - 1) return 0
    
    for (; right > 0; right--) {
        if (nums[right] < nums[right - 1]) break
    }
    
    for (let i = left; i <= right; i ++) {
        let value = nums[i]
        min = Math.min(min, value)
        max = Math.max(max, value)
    }
    
    for (let i = left - 1; i >= 0; i--) {
        if (nums[i] > min) {
            left = i
        }
    }
    
    for (let i = right + 1; i < n; i++) {
        if (nums[i] < max) {
            right = i
        }
    }
    
    return right - left + 1
    
};