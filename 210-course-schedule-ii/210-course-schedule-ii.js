/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => new Array())
    const inDegree = new Array(numCourses).fill(0)
    const queue = new Queue()
    const ordering = []
    
    prerequisites.forEach(( [child, parent] ) => {
        graph[parent].push(child)
        inDegree[child]++
    })
    
    inDegree.forEach((edges, index) => {
        if (edges === 0) queue.enqueue(index)
    })
    
    while (!queue.isEmpty()) {
        let course = queue.dequeue()
        ordering.push(course)
        let childern = graph[course]
        childern.forEach((child) => {
            inDegree[child]--
            if (inDegree[child] === 0) queue.enqueue(child)
        })
    }
    
    if (ordering.length === numCourses) return ordering
    return []
    
    
};

// Topological Sort
// time complexity: O(n + m)
// space complexity: O(n + m)