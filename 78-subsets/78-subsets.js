/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length
    const response = [[]]
    
    const bt = function(start, res = []) {
        //base case
        if (start >= n) return
        
        //loop
        for (let i = start; i < n; i++) {
            //add
            res.push(nums[i])
            response.push(res.slice())
            //bt
            bt(i + 1, res)
            //remove
            res.pop()
        }
    }
    
    bt(0)
    
    return response
    
};

//Backtracking