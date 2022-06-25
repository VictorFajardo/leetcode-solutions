/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let coincidences = 0
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            if (coincidences === 1) return false
            coincidences += 1
            
            if (i < 2 || nums[i - 2] <= nums[i]) {
                nums[i - 1] = nums[i]
            } else {
                nums[i] = nums[i - 1]
            }
        }
    }
    
    return true
    
};