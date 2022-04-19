/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // Iteration
    /*const n = nums.length - 1
    let max = 0
    for (let i = 0; i < n && i <= max; i++) {
        max = Math.max(max, i + nums[i])
    }
    
    return max >= n*/
    
    // Dynamic Programming    
    const cache = []
    const dp = (n, nums, cache) => {
        if (n === nums.length - 1) return true
        
        for (let i = nums[n]; i > 0 ; i--) {
            if (cache[n + i] === undefined) {
                cache[n + i] = dp(n + i, nums, cache)
            }
            if (cache[n + i]) return true            
        }
        
        return false        
    }
    
    return dp(0, nums, cache)
};

// Dynamic Programming
// time complexity: O(n * m)
// space complexity: O(n)