/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let cache = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    
    const dp = (row, col, cache) => {
        if(obstacleGrid[row][col] === 1) return 0
        if (row == m - 1 && col === n - 1) return 1
        let right = 0
        let bottom = 0
        if (row < m && col + 1 < n && obstacleGrid[row][col + 1] === 0) {
            if (!cache[row][col + 1]) cache[row][col + 1] = dp(row, col + 1, cache)
            right = cache[row][col + 1]
        }
        if (row + 1 < m && col < n && obstacleGrid[row + 1][col] === 0) {
            if (!cache[row + 1][col]) cache[row + 1][col] = dp(row + 1, col, cache)
            bottom = cache[row + 1][col]
        }
        return right + bottom
        }

    return dp(0, 0, cache)
};