/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Pair {
    constructor(priority, value) {
        this.priority = priority
        this.element = value
    }
}
var topKFrequent = function(nums, k) {
    const maxPQ = new MaxPriorityQueue({priority: (a,b) => b[0] - a[0]})
    const frequency = {}
    const response = []
    
    for (let number of nums) {
        if (!(number in frequency)) frequency[number] = 0
        frequency[number]++
    }
    
    for (let [element, priority] of Object.entries(frequency)) {
        maxPQ.enqueue(element, priority)
    }
    
    while (k > 0) {
        response.push(maxPQ.dequeue().element)
        k--
    }
    
    return response
    
};