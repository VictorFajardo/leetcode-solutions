/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length
    if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1
    
    const directions = [[-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]]
    const queue = new Queue()
    queue.enqueue([0,0])
    grid[0][0] = 1
    
    while (!queue.isEmpty()) {
        let qLength = queue.size()
        
        while (qLength > 0) {
            let [r, c] = queue.dequeue()
            let value = grid[r][c]
            if (r === n - 1 && c === n - 1) return value
            for (let [row, col] of directions) {
                if (r + row >= 0 && r + row < n && c + col >= 0 && c + col < n && grid[r + row][c + col] === 0) {
                    queue.enqueue([r + row, c + col])
                    grid[r + row][c + col] = value + 1
                }
            }
            qLength -= 1
        }
    }
    
    return -1
    
};

// Breath First Search
// time complexity: O(n)
// space complexity: O(n)