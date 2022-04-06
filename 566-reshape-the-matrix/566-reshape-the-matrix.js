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
    
    const newMat = new Array(r).fill(0).map(_ => new Array(c))
    
    for (let i = 0; i < m * n; i++) {
        const value = mat[Math.floor(i / n)][i % n]
        newMat[Math.floor(i / c)][i % c] = value
    }
    
    return newMat    
};