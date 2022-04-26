/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0
    let end = nums.length - 1
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        
        if (nums[mid] < nums[end]) end = mid
        else if (nums[mid] > nums[end]) start = mid + 1
        else end -= 1
    }
    
    return nums[start]
};

// Bynary Search 
// time complexity: O(log(n))
// space complexity: O(1)