/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set()
    
    for (let index = 0; index < nums.length; index++) {
        const number = nums[index]
        if (set.has(number)) return true
        set.add(number)
        if (set.size > k) {
            set.delete(nums[index - k])
        }
    }
    
    return false
    
//     const map = new Map()
    
//     for (let index = 0; index < nums.length; index++) {
//         const number = nums[index]
//         if (map.has(number)) {
//             if (index - map.get(number) <= k) return true
//         }
//         map.set(number, index)
//     }
    
//     return false
};