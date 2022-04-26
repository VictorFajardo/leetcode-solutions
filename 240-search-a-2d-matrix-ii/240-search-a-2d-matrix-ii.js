/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    let row = 0
    let col = n - 1
    
    while (row < m && col >= 0) {
        if (matrix[row][col] < target) row++
        else if (matrix[row][col] > target) col--
        else return true
    }    
    
    return false
};

// Divide and Conquer
// time complexity: O(n + m)
// space complexity: O(1)