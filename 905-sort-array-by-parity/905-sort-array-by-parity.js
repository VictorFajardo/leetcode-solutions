/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let start = 0
    
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] % 2 === 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
        }
    }
    
    return nums
};