/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    const dp = [0]
    let buyPrice = prices[0]
    
    for (let i = 1; i < n; i++) {
        let newPrice = prices[i]
        if (newPrice < buyPrice) {
            buyPrice = newPrice
        }
        
        dp[i] = Math.max(dp[i - 1], newPrice - buyPrice)
    }
    
    return dp[n - 1]
    
};

// Dynamic Programming
// time complexity: O(n)
// space complexity: O(n)