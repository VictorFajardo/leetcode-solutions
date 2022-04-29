/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const directions = [[0,1], [1,0], [0, -1], [-1, 0]]
    let counter = 0
    let dir = 0
    let row = 0
    let col = 0
    const response = []
    
    while (counter < m * n) {
        let element = matrix[row][col]
        response.push(element)
        matrix[row][col] = 'X'
        const nextRow = row + directions[dir][0]
        const nextCol = col + directions[dir][1]
        if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || matrix[nextRow][nextCol] === 'X') dir = (dir + 1) % 4
        
        row += directions[dir][0]
        col += directions[dir][1]
        counter++
    }
    
    return response
};

// Matrix
// time complexity: O(n**2)
// space complexity: O(1)