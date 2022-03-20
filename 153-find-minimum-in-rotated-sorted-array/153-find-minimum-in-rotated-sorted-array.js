/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const n = nums.length - 1
    let left = 0
    let right = n

    if (nums[right] >= nums[left]) return nums[0]
    
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        let midNumber = nums[mid]
        let prevNumber = nums[mid - 1]
        let nextNumber = nums[mid + 1]
        if (midNumber < prevNumber) return midNumber
        if (midNumber > nextNumber) return nextNumber
        if (midNumber > nums[left]) left = mid + 1
        else right = mid
    }
};