/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let minIndex = -1
    let minDistance = Infinity
    
    for (let i = 0; i < points.length; i++) {
        let point = points[i]
        if (!isValidPoint(x, y, point)) continue
        let manhathanDistance = getManhattanDistance(x, y, point)
        if (manhathanDistance < minDistance) {
            minDistance = manhathanDistance
            minIndex = i
        }
    }
    
    return minIndex
    
};

var isValidPoint = function(x, y, point) {
    return x === point[0] || y === point[1]
}

var getManhattanDistance = function (x, y, point) {
    return Math.abs(x - point[0]) + Math.abs(y - point[1])
}

// Array
// time complexity: O(n*log(n))
// space complexity: O(1)