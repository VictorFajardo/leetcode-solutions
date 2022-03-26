/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length
    const visited = new Array(n).fill(false)
    let count = 0
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(isConnected, visited, i, n)
            count++
        }
    }
    
    return count
    
};

var dfs = function(matrix, visited, index, total) {
    visited[index] = true
    
    for (let i = 0; i < total; i++) {
        if (matrix[index][i] === 1 && !visited[i]) {
            dfs(matrix, visited, i, total)
        }
    }
}

// Depth First Search
// time complexity: O(n^2)
// space complexity: O(n)


/**
 * @param {number[][]} isConnected
 * @return {number}
 */
/*
var findCircleNum = function(isConnected) {
    const n = isConnected.length
    const visited = new Array(n).fill(false)
    const queue = new Queue()
    let count = 0
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            queue.enqueue(i)
            while (!queue.isEmpty()) {
                let curr = queue.dequeue()
                visited[curr] = true
                for (let j = 0; j < n; j++) {
                    if (isConnected[curr][j] === 1 && !visited[j]) {
                        queue.enqueue(j)
                    }
                }    
            }
            count++
        }
    }
    
    return count
    
};
*/
// Breadth First Search
// time complexity: O(n^2)
// space complexity: O(n)