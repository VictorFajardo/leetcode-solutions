/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let prod = 1
    
    for (let number of nums) {
        if (!number) return 0
        prod *= number
    }
    
    return prod > 0 ? 1 : -1
    
};