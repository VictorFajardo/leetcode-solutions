/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    let right = 0
    
    for (; right < nums.length; right++) {
        if (nums[right] !== 0) {
            swap(nums, left, right)
            left++
        }
    }
    
    return nums
    
};

var swap = function(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]]
}