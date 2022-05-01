/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length
    const cache = {}
    
    var dp = function(n, cache) {
        if (n < 2) return 0
        
        if (!((n - 2) in cache)) cache[n - 2] = dp(n - 2, cache)
        if (!((n - 1) in cache)) cache[n - 1] = dp(n - 1, cache)
        
        return Math.min(cache[n - 1] + cost[n - 1], cache[n - 2] + cost[n - 2])
    }
    
    return dp(n, cache)
    
};