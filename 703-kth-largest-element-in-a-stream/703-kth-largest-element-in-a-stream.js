/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.pq = new MinPriorityQueue()
    
    nums.forEach((val) => {
        this.add(val)
    })
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.pq.size() < this.k) this.pq.enqueue(val)
    else {
        if (val > this.pq.front().element) {
            this.pq.enqueue(val)
            this.pq.dequeue()
        }
    }
    
    return this.pq.front().element
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */