/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length
    const minPQ = new MinPriorityQueue()
    // const response = []
    
    matrix.map((row, index) => {
        minPQ.enqueue({rowIndex: index, numIndex: 0}, row[0])
    })
    
    while (k > 0) {
        let { priority, element: {rowIndex, numIndex} } = minPQ.dequeue()
        if (k === 1) return priority
        // response.push(priority)
        if (numIndex < matrix[rowIndex].length - 1) {
            const row = matrix[rowIndex]
            minPQ.enqueue({rowIndex: rowIndex, numIndex: numIndex + 1}, row[numIndex + 1])
        }
        k--
    }
    
    // console.log(minPQ.toArray())
    
};