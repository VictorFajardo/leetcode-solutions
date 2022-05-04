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
            store[number] = store[number] + 1 || 1
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