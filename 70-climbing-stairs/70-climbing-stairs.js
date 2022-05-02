/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // recursive
    /*const options = 2
    const cache = {}
    
    const maxSteps = step => {
        if (step < 0) return
        else if (step <= options) return step
        if (cache[step]) return cache[step]
        cache[step] = maxSteps(step - 1) + maxSteps(step - 2)
        return cache[step]
    }
    
    return maxSteps(n)*/
    
    // iteration
    if (n <=2) return n
    // const res = [1, 2]
    let oneStepBefore = 2
    let twoStepBefore = 1
    let total = 0
    for (let i = 2; i < n; i++) {
        total = oneStepBefore + twoStepBefore
        twoStepBefore = oneStepBefore
        oneStepBefore = total
    }
    return total
};

// dynamic programming + memoization
// time complexity O(n)
// space complexity O(n)

