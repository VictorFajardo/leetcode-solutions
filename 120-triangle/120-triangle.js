/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // Dynamic Programming
    /*const cache = new Array(triangle.length - 1).fill(0).map(_ => new Array())
    
    const dp = (row, col, triangle, cache) => {
        if (row === triangle.length - 1) {
            return triangle[row][col]
        }
        if (cache[row][col] === undefined) {
            cache[row][col] = Math.min(dp(row + 1, col, triangle, cache), dp(row + 1, col + 1, triangle, cache)) + triangle[row][col]
        }
        return cache[row][col]
    }
    
    return dp(0, 0, triangle, cache)*/
    
    
    // Iteration Top to Bottom
    const res = []
    
    for (let row = triangle.length - 1; row >= 0; row--) {
        for (let col = 0; col < triangle[row].length; col++) {
            res[col] = Math.min(res[col] || 0, res[col + 1] || 0) + triangle[row][col]
        }
    }
    
    return res[0]
        
    
};

// Iteration Top to Bottom
// time complexity: O(n^2)
// space complexity: O(n)

// Dynamic Programming
// time complexity: O(n)
// space complexity: O(n)