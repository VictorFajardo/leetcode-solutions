/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let h = mat.length
    let w = mat[0].length
    if (r * c !== h * w) return mat
    let res = new Array(r).fill(0).map(_ => Array(c))
    for (let i = 0; i < r * c; i++) {
        res[Math.floor(i / c)][i % c] = mat[Math.floor(i / w)][i % w]
    }
    return res
    
};

// 2D Array
// time complexity: O(n)
// space complexity: O(n)