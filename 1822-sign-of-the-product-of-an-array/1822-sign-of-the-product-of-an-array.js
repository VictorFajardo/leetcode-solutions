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

var signFunc = function(product) {
    if (product > 0) return 1
    else if (product < 0) return -1
    else return 0
}