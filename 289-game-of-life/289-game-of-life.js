/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const dx = [1, 1, 0, -1, -1, -1, 0, 1];
    const dy = [0, 1, 1, 1, 0, -1, -1, -1];
    
    const row = board.length;
    const col = board[0].length;
    
    for (let i = 0; i< row; i++) {
        for (let j = 0; j < col; j++) {
            let liveCount = 0;
            for (let k = 0; k < 8; k++) {
            
                if (isSafe(row, col, i + dx[k], j+ dy[k]) && Math.abs(board[i + dx[k]][j+ dy[k]]) === 1) {
                    liveCount++;
                }
            
            }
            
            if (board[i][j] === 0 && liveCount === 3) {
                    board[i][j] = 2;
            } else if (board[i][j] === 1 && (liveCount > 3 || liveCount < 2)) {
                    board[i][j] = -1;
            }
            
        }
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            board[i][j] = (board[i][j] > 0)  ? 1 : 0;
        }
    }
};

const isSafe = (row, col,i, j) => {
    if (i < 0 || i >= row || j < 0 || j >= col) {
        return false;
    }
    return true;
}