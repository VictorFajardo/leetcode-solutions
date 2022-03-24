/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dictionary = {}
    
    for (let number of nums) {
        if (number in dictionary) return true
        dictionary[number] = true
    }
    
    return false
    
};