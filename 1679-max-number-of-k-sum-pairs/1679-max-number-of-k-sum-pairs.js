/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const store = new Map()
    let pairs = 0
    
    nums.forEach((number) => {
        let complement = k - number
        if (store.has(complement)) {
            store.set(complement, store.get(complement) - 1)
            pairs += 1
            if (store.get(complement) === 0) store.delete(complement)
        } else {
            store.set(number, store.get(number) + 1 || 1)
        }
    })
    
    return pairs
};