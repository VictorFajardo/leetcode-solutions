var findRightInterval = function(intervals) {
    const maxStarIndices = new MaxPriorityQueue({priority: v => v[0]});
    const maxEndIndices = new MaxPriorityQueue({priority: v => v[0]});
    const n = intervals.length
    const result = new Array(n).fill(-1)
    
    
    for (let i = 0; i < n; i++) {
        maxStarIndices.enqueue([intervals[i][0], i])
        maxEndIndices.enqueue([intervals[i][1], i])
    }
    
    for (let i = 0; i < n; i++) {
        let [topEnd, endIndex] = maxEndIndices.dequeue().element
        if (maxStarIndices.front().element[0] >= topEnd) {
            let [topStart, startIndex] = maxStarIndices.dequeue().element
            while (maxStarIndices.size() > 0 && maxStarIndices.front().element[0] >= topEnd) {
                [topStart, startIndex] = maxStarIndices.dequeue().element
            }
            result[endIndex] = startIndex
            maxStarIndices.enqueue([topStart, startIndex])
        }
    }
    
    return result
    
};