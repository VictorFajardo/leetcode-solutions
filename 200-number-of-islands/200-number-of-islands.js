/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let total = 0
    
    grid.forEach((row, i) => {
        row.forEach((col, j) => {
            if (grid[i][j] === '1') {
                fill(grid, i, j, rows, cols)
                total++
            }
        })
    })
    
    return total
};


var fill = function(grid, i, j, rows, cols) {
    grid[i][j] = '0'

    if (i - 1 >= 0 && grid[i - 1][j] === '1') fill(grid, i - 1, j, rows, cols)
    if (j + 1 < cols && grid[i][j + 1] === '1') fill(grid, i, j + 1, rows, cols)
    if (i + 1 < rows && grid[i + 1][j] === '1') fill(grid, i + 1, j, rows, cols)
    if (j - 1 >= 0 && grid[i][j - 1] === '1') fill(grid, i, j - 1, rows, cols)
}