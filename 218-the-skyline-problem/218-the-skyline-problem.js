/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

class Point {
    constructor(x, y, start) {
        this.x = x
        this.y = y
        this.start = start
    }
}
var getSkyline = function(buildings) {
    const points = []
    // const heights = new MaxPriorityQueue()
    const response = []
    let max = 0
    // heights.enqueue(0)
    
    buildings.forEach(([x1, x2, y]) => {
        points.push(new Point(x1, y, true))
        points.push(new Point(x2, y, false))
    })
    
    points.sort((a, b) => {
        if (a.x !== b.x) return b.x - a.x
        return (a.start ? a.y : -a.y) - (b.start ? b.y : -b.y)
    })
    
    const map = {}
    map[0] = 1
    
    while (points.length) {
        let {x, y, start} = points.pop()
        if (start) {
            if (!(y in map)) map[y] = 0
            map[y] += 1
        }
        else {
            map[y] -= 1
            if (map[y] === 0) delete map[y]
        }
        // console.log(map)
        let mapLength = Object.keys(map).length
        let mapMax = Object.keys(map)[mapLength - 1]
        
        if (mapMax !== max) {
            response.push([x, mapMax])
            max = mapMax
        }
    }
    
    return response
};