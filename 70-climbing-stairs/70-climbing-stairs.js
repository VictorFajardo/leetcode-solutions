/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, store = {}) {
    if (n === 2) return 2
    if (n === 1) return 1
    if (n < 1) return 0
    
    if (!((n - 1) in store)) store[n - 1] = climbStairs(n - 1, store)
    if (!((n - 2) in store)) store[n - 2] = climbStairs(n - 2, store)
    
    let max = store[n - 1] + store[n - 2]
    
    return max
};