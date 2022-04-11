/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxPQ = new MaxPriorityQueue()
    let pq = []
    for (let point of points) {
        let pointDistanceToOrigin = distanceToOrigin(point)
        if (pq.length < k) {
            pq.push({
                point,
                pointDistanceToOrigin
            })
            pq.sort((a, b) => a.pointDistanceToOrigin - b.pointDistanceToOrigin)
        } else {
            if (pointDistanceToOrigin < pq[k - 1].pointDistanceToOrigin) {
                pq.pop()
                pq.push({
                    point,
                    pointDistanceToOrigin
                })
                pq.sort((a, b) => a.pointDistanceToOrigin - b.pointDistanceToOrigin)
            }
        }
    }
    
    return pq.map(({ point }) => point)
};

const distanceToOrigin = ([x,y]) => x ** 2 + y ** 2