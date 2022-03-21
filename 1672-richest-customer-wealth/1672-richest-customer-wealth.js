/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = -Infinity
    let wealth = 0
    
    accounts.forEach((customer) => {
        wealth = 0    
        customer.forEach((account) => {
            wealth += account    
        })
        maxWealth = Math.max(maxWealth, wealth)
    })
    
    return maxWealth
};