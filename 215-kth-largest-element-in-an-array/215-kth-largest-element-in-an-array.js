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
        if (minPQ.size() < k) {
            minPQ.enqueue(num)
        } else {
            if (num > minPQ.front().element) {
                minPQ.dequeue()
                minPQ.enqueue(num)
            }
        }
    })
    
    // space: O(1)
    // time: O(1)
    return minPQ.front().element
    
};