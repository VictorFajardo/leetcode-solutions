/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = -Infinity
    let wealth
    
    for (let account of accounts) {
        wealth = 0    
        for (let amount of account) {
            wealth += amount
        }
        maxWealth = Math.max(maxWealth, wealth)
    }
    
    return maxWealth
};