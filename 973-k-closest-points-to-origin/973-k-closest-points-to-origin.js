/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxPQ = new MaxPriorityQueue()
    for (let point of points) {
        let dist = squaredDistance(point)
        if (maxPQ.size() < k) {
            maxPQ.enqueue(point, dist)
        } else if (dist < maxPQ.front().priority) {
            maxPQ.dequeue()
            maxPQ.enqueue(point, dist)
        }
    }
    
    return maxPQ.toArray().map(el => el.element)
};

const squaredDistance = ([x,y]) => x ** 2 + y ** 2