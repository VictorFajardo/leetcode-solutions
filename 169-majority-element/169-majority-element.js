/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Boyer-Moore Majority Vote Algorithm
    let major = nums[0]
    let count = 1
    
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            major = nums[i]
            count++
        } else if (major === nums[i]) {
            count++
        } else {
            count--
        }
    }
    
    return major
    
    /*let map = {}
    let max = 0
    let maxNumber = 0
    for (let n of nums) {
        if (!map[n]) map[n] = 0
        map[n]++
        if (map[n] > max) {
            max = map[n]
            maxNumber = n
        }
    }
    return maxNumber*/
};

// Boyer-Moore Majority Vote Algorithm
// time complexity: O(n)
// space complexity: O(1)