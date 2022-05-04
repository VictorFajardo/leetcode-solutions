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

/*
First Solution:
create a hashmap to storage the complementys of any number in the array
if a number === complement, we found a pair, we remove the complement from the storage

Time O(n)
Space O(n)

Second Solution:
sort the array, create 2 pointers on the sides, and move to the center looking for pairs that sum K

Time O(nlogn) + O(n) = O(n*log(n))
Space O(1)

*/