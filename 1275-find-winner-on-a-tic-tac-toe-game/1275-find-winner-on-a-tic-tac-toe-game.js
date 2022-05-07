/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const board = new Array(3).fill(0).map(() => new Array(3).fill(' '))
    let isPlayerATurn = true
    
    moves.forEach(([x, y]) => {
        if (isPlayerATurn) board[x][y] = 'X'
        else board[x][y] = 'O'
        isPlayerATurn = !isPlayerATurn
    })
    
    for (let i = 0; i < 3; i++) {
        let left = board[i][0]
        if (left !== ' ' && left === board[i][1] && left === board[i][2]) return left === 'X' ? 'A' : 'B'
    }
    
    for (let j = 0; j < 3; j++) {
        let top = board[0][j]
        if (top !== ' ' && top === board[1][j] && top === board[2][j]) return top === 'X' ? 'A' : 'B'
    }
    
    let topLeft = board[0][0]
    if (topLeft !== ' ' && topLeft === board[1][1] && topLeft === board[2][2]) return topLeft === 'X' ? 'A' : 'B'
    
    let topRight = board[0][2]
    if (topRight !== ' ' && topRight === board[1][1] && topRight === board[2][0]) return topRight === 'X' ? 'A' : 'B'
    
    return moves.length < 9 ? 'Pending' : 'Draw'
    
};