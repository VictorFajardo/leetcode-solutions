/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length
    let cols = board[0].length
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (bt(board, rows, cols, row, col, directions, 0, word)) return true
        }
    }
    
    return false
    
};

var bt = function(board, rows, cols, row, col, directions, index, word) {
    if (index === word.length) return true
    if (row < 0 || row >= rows || col < 0 || col >= cols || word.charAt(index) !== board[row][col]) return false
    
    let answer = false
    
    for (let i = 0; i < directions.length; i++) {
        let [x, y] = directions[i]
        board[row][col] = '#'
        answer = bt(board, rows, cols, row + x, col + y, directions, index + 1, word)
        if (answer) break
        board[row][col] = word.charAt(index)
    }
    
    return answer
}

// Backtracking
// time complexity: O(n)
// space complexity: O(1)