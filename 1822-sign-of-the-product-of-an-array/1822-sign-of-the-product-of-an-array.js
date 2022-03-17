/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let result = 1
    
    for (let number of nums) {
        result *= number
    }
    
    if (result > 0) return 1
    else if (result < 0) return -1
    return 0
    
};
