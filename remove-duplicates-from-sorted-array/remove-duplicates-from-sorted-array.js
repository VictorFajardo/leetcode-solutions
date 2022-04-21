/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let start = 0
    let end = 0
    
    for (; end < nums.length; end++) {
        if (nums[end] === nums[start]) continue
        start++
        [nums[start], nums[end]] = [nums[end], nums[start]]
    }
    
    return start + 1
    
};