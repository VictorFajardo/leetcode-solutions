/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    const response = []
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        response.push(sum)
    }
    
    return response
    
};