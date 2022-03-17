/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length - 1
    let start = 0
    let end = n
    
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        let curr = nums[mid]
        
        if (curr > target) {
            end = mid - 1
        } else if (curr < target) {
            start = mid + 1
        } else {
            return mid
        }
    }
    
    return -1
    
};