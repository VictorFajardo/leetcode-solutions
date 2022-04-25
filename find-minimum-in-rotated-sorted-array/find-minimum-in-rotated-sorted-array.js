/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0
    let end = nums.length - 1
    if (start === end || nums[start] < nums[end]) return nums[start]
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        
        let middle = nums[mid]
        let prev = nums[mid - 1]
        let next = nums[mid + 1]
        
        if (prev > middle) return middle
        else if (middle > next) return next
        else if (middle < nums[end]) end = mid - 1
        else start = mid + 1
    }
    
    return nums[start]
    
};

// Bynary Search 
// time complexity: O(log(n))
// space complexity: O(1)