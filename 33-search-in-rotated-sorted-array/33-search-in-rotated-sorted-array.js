/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        
        let middle = nums[mid]
        if (nums[mid] === target) return mid
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[end] ) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    
    return -1
    
};

// Bynary Search 
// time complexity: O(log(n))
// space complexity: O(1)