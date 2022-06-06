/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    if (x === 0 && y === 0) return 0
    x = Math.abs(x)
    y = Math.abs(y)
    const directions = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]]
    const queue = new Queue()
    queue.enqueue([0,0])
    const visited = new Set()
    visited.add('0:0')
    let steps = 0
    
    while (!queue.isEmpty()) {
        let qSize = queue.size()
        while (qSize > 0) {
            let [row, col] = queue.dequeue()            
            if (row === x && col === y) return steps
            for (let [newRow, newCol] of directions) {
                newRow += row
                newCol += col
                if (!visited.has(`${newRow}:${newCol}`) && newRow >= -1 && newCol >= -1) {
                    queue.enqueue([newRow, newCol])
                    visited.add(`${newRow}:${newCol}`)
                }
            }    
            qSize -= 1
        }
        steps += 1
    }
    
    return -1
    
};

