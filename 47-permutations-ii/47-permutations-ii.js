/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    const response = []
    const visited = new Array(n).fill(false)
    const permutation = []
    
    const backtracking = function(permutation = [], visited = []) {
        //base case
        if (permutation.length === n) {
            response.push(permutation.slice(0))    
        } 
        
        for (let i = 0; i < n; i++) {
            if (visited[i]) continue
            if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue
            //add
            visited[i] = true
            permutation.push(nums[i])
            //backtrack
            backtracking(permutation, visited)
            //remove
            permutation.pop()
            visited[i] = false
        }
    }
    
    backtracking()
    
    return response
};

// Backtracking