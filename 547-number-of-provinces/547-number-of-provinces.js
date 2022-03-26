/**
 * @param {number[][]} isConnected
 * @return {number}
 */
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