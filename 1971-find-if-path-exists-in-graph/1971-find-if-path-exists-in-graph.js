/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adjacencyList = new Map()
    
    const addVertex = function(vertex) {
        adjacencyList.set(vertex, [])
    }
    
    const addEdge = function(origin, destination) {
        adjacencyList.get(origin).push(destination)
        adjacencyList.get(destination).push(origin)
    }

    for (let i = 0; i < n ; i++) {
        addVertex(i)
    }
    
    edges.forEach(edge => addEdge(...edge))
    
    let seen = false
    
    const dfs = function(source, destination, visited = new Set()) {
        if (!visited.has(source) && !seen) {
            if (source === destination) {
                seen = true
                return
            }

            visited.add(source)

            const vertices = adjacencyList.get(source)

            for (let vertex of vertices) {
                dfs(vertex, destination, visited)
            }
        }
    }
    
    dfs(source, destination)
    
    return seen
};