/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    const quadruplets = []
    
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            searchPairs(nums, target, i, j, quadruplets)
        }
    }
    
    return quadruplets
    
};

var searchPairs = function(nums, target, first, second, quadruplets) {
    let left = second + 1
    let right = nums.length - 1
    
    while (left < right) {
        let sum = nums[first] + nums[second] + nums[left] + nums[right]
        if (sum === target) {
            quadruplets.push([nums[first], nums[second], nums[left], nums[right]])
            left++
            right--
            while (left < right && nums[left] === nums[left - 1]) left++
            while (left < right && nums[right] === nums[right + 1]) right--
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
}

// Two Pointers
// time complexity: O(n)
// space complexity: O(n)