/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows = board.length
    const cols = board[0].length
    const border = []
    
    //getting the border elements
    for (let i = 0; i < rows; i++) {
        border.push([i, 0])
        border.push([i, cols - 1])
    }
    for (let i = 1; i < cols - 1; i++) {
        border.push([0, i])
        border.push([rows - 1, i])
    }
    
    //looping thought the border elements    
    for (let i = 0; i < border.length; i++) {
        const [x, y] = border[i]
        if (board[x][y] === 'O') {
            fill(board, x, y, rows, cols)
        }
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
            if (board[i][j] === 'L') {
                board[i][j] = 'O'
            }
        }
    }
    
};

var fill = function(board, i, j, rows, cols) {
    if (board[i][j] !== 'O') return
    
    board[i][j] = 'L'
    
    if (i > 0) fill(board, i - 1, j, rows, cols)
    if (j < cols - 1) fill(board, i, j + 1, rows, cols)
    if (i < rows - 1) fill(board, i + 1, j, rows, cols)
    if (j > 0) fill(board, i, j - 1, rows, cols)
}

// Depth First Search
// time complexity: O(n)
// space complexity: O(n)

