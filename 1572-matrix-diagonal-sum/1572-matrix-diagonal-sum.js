/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length - 1
    let sum = 0
    
    for (let i = 0; i <= n; i++) {
        if (i === n - i) sum += mat[i][i]
        else sum += mat[i][i] + mat[i][n - i]
    }
    
    return sum
};