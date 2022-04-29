/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length
    
    const transpose = (matrix) => {
        for (let row = 0; row < n - 1; row++) {
            for (let col = row + 1; col < n; col++) {
                [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
            }
        }
    }
    
    const reverse = (matrix) => {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < Math.floor(n / 2); col++) {
                [matrix[row][col], matrix[row][n - col - 1]] = [matrix[row][n - col - 1], matrix[row][col]]
            }
        }
    }
    
    transpose(matrix)
    
    reverse(matrix)
    
};

// Array
// time complexity: O(m)
// space complexity: O(1)