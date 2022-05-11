/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.board = new Array(n).fill(0).map(() => new Array(n).fill(0))
    
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    this.board[row][col] = player
    
    return this.isWinner(row, col, player) ? player : 0
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

TicTacToe.prototype.isWinner = function(row, col, player) {
    const n = this.board.length
    
    if (this.testRow(row, col, player, n) ||
       this.testCol(row, col, player, n) ||
       this.test1stDiag(row, col, player, n) ||
       this.test2ndDiag(row, col, player, n)) return true
    return false
};

TicTacToe.prototype.testRow = function(row, col, player, n) {
    for (let j = 0; j < n; j++) {
        if (this.board[row][j] !== player) return false
    }
    return true
}
TicTacToe.prototype.testCol = function(row, col, player, n) {
    for (let i = 0; i < n; i++) {
        if (this.board[i][col] !== player) return false
    }
    return true
}
TicTacToe.prototype.test1stDiag = function(row, col, player, n) {
    if (row === col) {
        for (let [i, j] = [0,0]; i < n; i++, j++) {
            if (this.board[i][j] !== player) return false
        }
        return true
    } else return false
}
TicTacToe.prototype.test2ndDiag = function(row, col, player, n) {
    if (row + col === n - 1) {
        for (let [i, j] = [0,n - 1]; i < n; i++, j--) {
            if (this.board[i][j] !== player) return false
        }
        return true
    } else return false
}