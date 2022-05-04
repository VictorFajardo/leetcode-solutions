/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const store = {}
    let pairs = 0
    
    nums.forEach((number) => {
        let complement = k - number
        if (complement in store) {
            store[complement] -= 1
            if (store[complement] === 0) {
                delete store[complement]
            }
            pairs += 1
        } else {
            if (!(number in store)) store[number] = 0
            store[number] += 1
        }
    })
    
    return pairs
};