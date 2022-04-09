/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const maxPQ = new MaxPriorityQueue()
    const response = []
    
    for (let point of points) {
        const ditanceToOrigin = euclideanDistanceToOrigen(point)
        if (maxPQ.size() < k) {
            maxPQ.enqueue(point, ditanceToOrigin)
        } else {
            if (ditanceToOrigin < maxPQ.front().priority) {
                maxPQ.dequeue()
                maxPQ.enqueue(point, ditanceToOrigin)
            }
        }
    }
    
    while (!maxPQ.isEmpty()) {
        response.push(maxPQ.dequeue().element)
    }
    
    return response
};

var euclideanDistanceToOrigen = function(point) {
    const [x, y] = point
    return Math.sqrt(x**2 + y**2)
}

// MaxPriorityQueue
// time complexity: O(n*log(k))
// space complexity: O(k)