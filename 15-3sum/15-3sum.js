/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const end = nums.length - 1
    const response = []
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        getPairs(nums, i + 1, end, -nums[i], response)
    }
    
    return response
};

var getPairs = function(arr, start, end, target, response) {
    while (start < end) {
        let sum = arr[start] + arr[end]
        if (sum === target) {
            response.push([-target, arr[start], arr[end]])
            start++
            end--
            while (start < end && arr[start] === arr[start - 1]) start++
            while (start < end && arr[end] === arr[end + 1]) end--
        } else if (sum > target) {
            end--
        } else if (sum < target) {
            start++
        }
    }
}

// Two Pointers
// time complexity: O(n)
// space complexity: O(n)