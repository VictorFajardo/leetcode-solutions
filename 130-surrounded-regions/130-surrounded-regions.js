/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows = board.length
    const cols = board[0].length
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i > 0 && i < rows - 1 && j > 0 && j < cols - 1) continue
            if (board[i][j] === 'O') {
                fill(board, i, j, rows, cols, 'L')
            }
        }
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i > 0 && i < rows - 1 && j > 0 && j < cols - 1) {
                if (board[i][j] === 'O') {
                    fill(board, i, j, rows, cols, 'X')
                }
            }
        }
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'L') {
                board[i][j] = 'O'
            }
        }
    }
    
    
};

var fill = function(board, i, j, rows, cols, str) {
    if (board[i][j] !== 'O') return
    
    board[i][j] = str
    
    if (i > 0) fill(board, i - 1, j, rows, cols, str)
    if (j < cols - 1) fill(board, i, j + 1, rows, cols, str)
    if (i < rows - 1) fill(board, i + 1, j, rows, cols, str)
    if (j > 0) fill(board, i, j - 1, rows, cols, str)
}

