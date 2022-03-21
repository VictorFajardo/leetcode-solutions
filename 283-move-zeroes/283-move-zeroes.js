/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let [slow, fast] = [0, 0]; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
            slow++
        }
    }
};

// Fast & Slow Pointers
// time complexity: O(n)
// space complexity: O(1)