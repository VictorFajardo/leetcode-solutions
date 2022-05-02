/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let start = 0
    let end = nums.length - 1
    
    while (start < end) {
        if (nums[start] % 2 > nums[end] % 2) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
        }
        if (nums[start] % 2 === 0) start += 1
        if (nums[end] % 2 === 1) end -= 1
    }
    
    return nums
};

// Two Pointers
// time complexity: O(n)
// space complexity: O(1)