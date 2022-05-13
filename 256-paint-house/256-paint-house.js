/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const cache = {}
    
    const dp = function(arr, index, lastIndex, cache) {
        if (index === arr.length) return 0
        
        let minCost = Infinity
        
        for (let i = 0; i < 3; i++) {
            if (i === lastIndex) continue
            
            const key = `${index + 1}:${i}`
            if (!(key in cache)) cache[key] = dp(arr, index + 1, i, cache)
            
            minCost = Math.min(minCost, arr[index][i] + cache[key])
        }
        return minCost
    }
    
    return dp(costs, 0, -1, cache)
    
};