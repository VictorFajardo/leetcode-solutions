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

var backtracking = function(arr, index, target, response, comb = [], sum = 0) {
    //base case
    if (sum === target) {
        response.push([...comb])
        return
    }
    if (sum > target) return
    //loop
    for (let i = index; i < arr.length; i ++) {
        const curr = arr[i]
        if (target < sum + curr) continue
        //add
        comb.push(curr)
        //backtrack
        backtracking(arr, i, target, response, comb, sum + curr)
        //remove
        comb.pop()
    }
}