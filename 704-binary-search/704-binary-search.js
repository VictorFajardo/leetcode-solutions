/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return searchHelper(nums, target, 0, nums.length);
};

var searchHelper = function(nums, target, start, end) {
    const middle = Math.floor((start + end) / 2);
    
    if (nums[middle] === target) {
        return middle;
    }
    
    if (start === end || start + 1 === end) {
        return -1;
    }
    
    if (nums[middle] < target) {
        return searchHelper(nums, target, middle, end);
    }

    if (nums[middle] > target) {
        return searchHelper(nums, target, start, middle);
    }
};