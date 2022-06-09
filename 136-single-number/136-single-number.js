/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = 0
    for (let i of nums) {
       num ^= i 
    }
    return num
};

// Bit Manipulation
// time complexity: O(n)
// space complexity: O(1)

    //Set
    /*
    let set = new Set()
    for (let i of nums) {
        if (set.has(i)) set.delete(i)
        else set.add(i)
    }

    const [first] = set

    if (set.size === 1) return first
    else return -1
    */