/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    
    return [findFirstElement(nums, target), findLastElement(nums, target)]
};

var findFirstElement = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    
    while (start < end) {
        let mid = Math.floor((end + start) / 2)
        let num = nums[mid]
        if (num === target) end = mid
        else if (num > target) end = mid - 1
        else start = mid + 1
    }
    
    return nums[start] === target ? start : -1
}

var findLastElement = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    
    while (start < end) {
        let mid = Math.round((end + start) / 2)
        let num = nums[mid]
        if (num === target) start = mid
        else if (num > target) end = mid - 1
        else start = mid + 1
    }
    
    return nums[start] === target ? start : -1
}