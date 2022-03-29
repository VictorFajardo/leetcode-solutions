/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let result = 1
    
    for (let number of nums) {
        result *= number
    }
    
    if (!result) return 0
    return result > 0 ? 1 : -1
    
};

// Array + Math
// time complexity: O(n)
// space complexity: O(1)