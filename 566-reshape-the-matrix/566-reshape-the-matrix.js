/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length
    const n = mat[0].length
    if (m * n !== r * c) return mat
    
    const response = new Array(r).fill(0).map(_ => new Array(c))
    
    for (let i = 0; i < m * n; i++) {
        const value = mat[Math.floor(i / n)][i % n]
        response[Math.floor(i / c)][i % c] = value
    }
    
    return response   
};

// Array
// time complexity: O(m * n)
// space complaxity: O(m * n)