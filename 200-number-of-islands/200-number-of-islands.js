/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    
    let total = 0
    
    var fill = function(i, j) {
        grid[i][j] = '0'

        if (i - 1 >= 0 && grid[i - 1][j] === '1') fill(i - 1, j)
        if (j + 1 < cols && grid[i][j + 1] === '1') fill(i, j + 1)
        if (i + 1 < rows && grid[i + 1][j] === '1') fill(i + 1, j)
        if (j - 1 >= 0 && grid[i][j - 1] === '1') fill(i, j - 1)
    }
    
    grid.forEach((row, i) => {
        row.forEach((col, j) => {
            if (grid[i][j] === '1') {
                fill(i, j)
                total++
            }
        })
    })
    
    return total
};

