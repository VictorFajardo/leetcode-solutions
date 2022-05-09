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
    
    const dfs = function(source, destination, visited = new Set()) {
        if (source === destination) return true

        const vertices = adjacencyList.get(source)
        visited.add(source)
        
        for (let vertex of vertices) {
            if (vertex === destination) {
                return true
            }
            
            if (!visited.has(vertex)) {
                if(dfs(vertex, destination, visited)) return true
            }
        }
        
        return false
    }
    
    return dfs(source, destination)
};