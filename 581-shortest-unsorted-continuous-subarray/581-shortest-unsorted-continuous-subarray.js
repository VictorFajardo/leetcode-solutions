/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const n = nums.length - 1
    let start = 0
    let end = n
    let subarrayMin = Infinity
    let subarrayMax = -Infinity
    
    while (start < n && nums[start] <= nums[start + 1]) {
        start++
    }
    
    if (start === n) return 0
    
    while (end > 0 && nums[end] >= nums[end - 1]) {
        end--
    }
    
    for (let i = start; i <= end; i++) {
        let currentNum = nums[i]
        subarrayMin = Math.min(subarrayMin, currentNum)
        subarrayMax = Math.max(subarrayMax, currentNum)
    }
    
    while (start > 0 && nums[start - 1] > subarrayMin) {
        start--
    }
    
    while (end < n && nums[end + 1] < subarrayMax) {
        end++
    }
    
    return end - start + 1
    
};


// Two Pointers
// time complexity: O(n)
// space complexity: O(1)