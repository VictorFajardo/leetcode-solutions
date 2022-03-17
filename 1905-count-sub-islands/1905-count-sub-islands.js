/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let count = 0
    const directions = [[-1, 0],
                [0, 1],
                [1, 0],
                [0, -1]]
    const queue = []            
    for (let row = 0; row < grid2.length; row++) {
        for (let col = 0; col < grid2[0].length; col++) {
            if (grid2[row][col] === 1) {
                let subIsle = true
                if (grid1[row][col] !== 1) subIsle = false
                grid2[row][col] = 0
                queue.push([row, col])
                while(queue.length) {
                    let current = queue.shift()
                    for (let dir of directions) {
                        let nextRow = current[0] + dir[0]
                        let nextCol = current[1] + dir[1]
                        if (nextRow < 0
                            || nextRow >= grid2.length
                            || nextCol < 0
                            || nextCol >= grid2[0].length
                            || grid2[nextRow][nextCol] === 0) continue
                        if (grid1[nextRow][nextCol] !== 1) subIsle = false
                        grid2[nextRow][nextCol] = 0
                        queue.push([nextRow, nextCol])
                    }
                }
                if (subIsle) count++
            }
        }
    }
    return count    
};