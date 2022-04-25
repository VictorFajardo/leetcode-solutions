/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length - 1
    let start = 0
    let end = n
    let i = 0
    
    while (i <= end) {
        let currentNumber = nums[i]
        
        if (currentNumber === 0) {
            swapNumbers(nums, i, start)
            start++
            i++
        } else if (currentNumber === 2) {
            swapNumbers(nums, i, end)
            end--
        } else {
            i++
        }
    }
    
};

var swapNumbers = function(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    return
}

// Two Pointers
// time complexity: O(n)
// space complexity: O(1)