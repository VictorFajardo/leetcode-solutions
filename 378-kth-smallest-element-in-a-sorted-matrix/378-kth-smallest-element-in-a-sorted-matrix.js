/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length
    const minPQ = new MinPriorityQueue({ compare: (a, b) => a.value - b.value })
    
    matrix.map((row, index) => {
        minPQ.enqueue({ rowIdx: index, colIdx: 0, value: row[0] })
    })
    
    while (k > 0) {
        let { rowIdx, colIdx, value } = minPQ.dequeue()
        if (k === 1) return value
        const row = matrix[rowIdx]
        if (colIdx < n - 1) {
            minPQ.enqueue({ rowIdx: rowIdx, colIdx: colIdx + 1, value: row[colIdx + 1] })
        }
        k--
    }
    
};

// PriorityQueue
// time complexity: O(k*log(k))
// space complexity: O(k)