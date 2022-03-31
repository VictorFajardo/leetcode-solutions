/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => b - a)
    const response = []
    
    backtracking(candidates, 0, target, response)
    
    return response
};

var backtracking = function(arr, index, remain, response, comb = []) {
    //base case
    if (remain === 0) {
        response.push([...comb])
        return
    }
    if (remain < 0) return
    //loop
    for (let i = index; i < arr.length; i ++) {
        const curr = arr[i]
        //add
        comb.push(curr)
        //backtrack
        backtracking(arr, i, remain - curr, response, comb)
        //remove
        comb.pop()
    }
}