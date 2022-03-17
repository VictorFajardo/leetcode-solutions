/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    coordinates.sort((a, b) => a - b)
    let dY = coordinates[0][1] - coordinates[1][1]
    let dX = coordinates[0][0] - coordinates[1][0]
    
    for (let i = 2; i < coordinates.length; i++) {
        let [x1, y1] = coordinates[i]
        let [x0, y0] = coordinates[i - 1]
        if (dX * (y1 - y0) !== dY * (x1 - x0)) return false
    }
    
    return true
};