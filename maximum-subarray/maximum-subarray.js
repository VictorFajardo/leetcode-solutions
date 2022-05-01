/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSubArray = nums[0]
    let maxSubArray = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        //if the currentSubArray is negative, trow it away. Otherwise, keep adding to it.
        currentSubArray = Math.max(currentSubArray + nums[i], nums[i])
        maxSubArray = Math.max(maxSubArray, currentSubArray)
    }
    
    return maxSubArray
    
};

// Kadane's Algorithm
// time complexity: O(n)
// space complexity: O(1)