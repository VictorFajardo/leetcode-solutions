/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const response = []
    
    for (let start = 0; start < nums.length - 2; start++) {
        if (start > 0 && nums[start] === nums[start - 1]) continue
        getPairs(nums, start + 1, response)
    }
    
    return response
};

var getPairs = function(arr, start, response) {
    let target = -arr[start - 1]
    let end = arr.length - 1
    
    while (start < end) {
        if (arr[start] + arr[end] > target) {
            end--
        } else if (arr[start] + arr[end] < target) {
            start++
        } else {
            response.push([-target, arr[start], arr[end]])
            end--
            start++
            while(start < end && arr[end] === arr[end + 1]) end--
            while(start < end && arr[start] === arr[start - 1]) start++
        }
    }
    
}