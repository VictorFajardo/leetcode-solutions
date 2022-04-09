/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const minPQ = new MinPriorityQueue()
    const response = []
    const p0 = [0, 0]
    
    for (let point of points) {
        const ditanceToOrigin = euclideanDistanceToOrigen(point)
        minPQ.enqueue(point, ditanceToOrigin)
    }
    
    while (k > 0) {
        response.push(minPQ.dequeue().element)
        k--
    }
    
    return response
};

var euclideanDistanceToOrigen = function(point) {
    const [x, y] = point
    return Math.sqrt(x**2 + y**2)
}