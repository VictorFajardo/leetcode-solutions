/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minPQ = new MinPriorityQueue()
    
    // time: O(n*log(k))
    // space: O(k)
    nums.map((num) => {
        minPQ.enqueue(num)
        if (minPQ.size() > k) {
            minPQ.dequeue()
        }
    })
    
    // space: O(1)
    // time: O(1)
    return minPQ.front().element
    
};