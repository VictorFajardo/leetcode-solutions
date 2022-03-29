/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let prod = 1
    
    for (let number of nums) {
        prod *= number
    }
    
    
    if (!prod) return 0
    return prod > 0 ? 1 : -1
    
};