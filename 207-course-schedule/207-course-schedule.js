/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => new Array())
    const inDegree = new Array(numCourses).fill(0)
    const queue = new Queue()
    let counter = 0
    
    prerequisites.forEach(( [child, parent] ) => {
        graph[parent].push(child)
        inDegree[child]++
    })
    
    inDegree.forEach((edge, index) => {
        if (edge === 0) queue.enqueue(index)
    })
    
    while (!queue.isEmpty()) {
        let course = queue.dequeue()
        counter++
        let children = graph[course]
        children.forEach((child) => {
            inDegree[child]--
            if (inDegree[child] === 0) queue.enqueue(child)
        })
    }
    
    return counter === numCourses
};

// Topological Sort
// time complexity: O(n + m)
// space complexity: O(n + m)