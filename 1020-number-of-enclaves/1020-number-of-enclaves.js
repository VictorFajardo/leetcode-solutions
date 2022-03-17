/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let count = 0
    const directions = [[-1, 0],
                [0, 1],
                [1, 0],
                [0, -1]]
    const queue = []
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                let boundary = false
                let lands = 1
                grid[row][col] = 0
                queue.push([row, col])
                while(queue.length) {
                    let current = queue.shift()
                    for (let dir of directions) {
                        let nextRow = current[0] + dir[0]
                        let nextCol = current[1] + dir[1]
                        if (nextRow < 0
                            || nextRow >= grid.length
                            || nextCol < 0
                            || nextCol >= grid[0].length) {
                            boundary = true
                            continue
                        } else if (grid[nextRow][nextCol] === 0) continue
                        grid[nextRow][nextCol] = 0
                        lands++
                        queue.push([nextRow, nextCol])
                    }
                }
                if (!boundary) count += lands
            }
        }
    }
    return count  
};