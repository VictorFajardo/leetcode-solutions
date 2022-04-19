/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    
    var dp = function(n, cache = {}) {
        if (n === nums.length - 1) return true
        
        let range = nums[n]
        for (let i = n + 1; i <= n + range; i++) {
            if (!(i in cache)) cache[i] = dp(i, cache)
            if (cache[i]) return true
        }
        
        return false
        
    }
    
    return dp(0)
    
};