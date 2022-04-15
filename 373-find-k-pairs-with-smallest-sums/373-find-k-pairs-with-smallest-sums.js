/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const maxPQ = new MaxPriorityQueue()
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const sum = nums1[i] + nums2[j]    
            if (maxPQ.size() < k) {
                maxPQ.enqueue([nums1[i], nums2[j]], sum)
            } else {
                if (sum > maxPQ.front().priority) {
                    break
                } else {
                    maxPQ.enqueue([nums1[i], nums2[j]], sum)
                    maxPQ.dequeue()
                }
            }
        }
    }
    
    return maxPQ.toArray().map(({ element }) => element).slice(0, k)
    
};