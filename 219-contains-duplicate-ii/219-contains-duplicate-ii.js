/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const store = {}
    
    for (let index = 0; index < nums.length; index++) {
        const number = nums[index]
        if (number in store) {
            if (index - store[number] <= k) return true
        }
        store[number] = index
    }
    
    return false
};