/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length
    const n = grid[0].length
    
    for (let i = 0; i < k; i++) {
        let prev = grid[m - 1][n - 1]

        for (let j = 0; j < m * n; j++) {
            let curr = grid[Math.floor(j / n)][j % n]
            grid[Math.floor(j / n)][j % n] = prev
            prev = curr
        }
    }
    
    return grid
    
};