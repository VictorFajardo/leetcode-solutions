/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length
    const n = board[0].length
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const cellLivingNeihbors = livingNeighbors(board, i, j, m, n)
            const cell = board[i][j]
            if (cell === 0) {
                if(cellLivingNeihbors === 3) board[i][j] = 2
            } else if (cell === 1) {
                if(cellLivingNeihbors < 2 || cellLivingNeihbors > 3) board[i][j] = -1
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board[i][j] > 0 ? 1 : 0
        }
    }
    
};

var livingNeighbors = function(board, i, j, m, n) {
    let top = Math.max(i - 1, 0)
    let left = Math.max(j - 1, 0)
    let bottom = Math.min(i + 1, m - 1)
    let right = Math.min(j + 1, n - 1)
    let neighbors = 0
    
    for (let r = top; r <= bottom; r++) {
        for (let c = left; c <= right; c++) {
            if (!(r === i && c === j) && (Math.abs(board[r][c]) === 1)) neighbors++
        }
    }
    
    return neighbors
}

/*
(n < 2) dies
(n >= 2 && n <= 3) lives
(n > 3) dies



*/