/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let minPQ = new MinPriorityQueue()
    let frequency = {}
    
    for (number of nums) {
        if (number in frequency) frequency[number]++
        else frequency[number] = 1
    }
    
    for (let [key, value] of Object.entries(frequency)) {
        minPQ.enqueue(key, value)
        if (minPQ.size() > k) minPQ.dequeue()
    }
    
    return minPQ.toArray().map(el => el.element)
    
};