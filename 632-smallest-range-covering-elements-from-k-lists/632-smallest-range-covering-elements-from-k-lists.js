/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const maxPQ = new MaxPriorityQueue({ compare: (a, b) => a[0] - b[0] })
    const response = []
    let startRange = 0
    let endRange = Infinity
    let maxNumber = -Infinity
    let n = nums.length
    
    for (let num of nums) {
        maxPQ.enqueue([num[0], 0, num])
        maxNumber = Math.max(maxNumber, num[0])
    }
    
    while (maxPQ.size() === n) {
        [number, index, num] = maxPQ.dequeue()
        
        if (endRange - startRange > maxNumber - number) {
            startRange = number
            endRange = maxNumber
        }
        
        if (num.length > index + 1) {
            maxPQ.enqueue([num[index + 1], index + 1, num])
            maxNumber = Math.max(maxNumber, num[index + 1])
        }
    }
    
    return [startRange, endRange]
};