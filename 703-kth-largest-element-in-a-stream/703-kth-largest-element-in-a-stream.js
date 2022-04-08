/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.pq = new MinPriorityQueue()
    
    for (let el of nums) {
        this.add(el)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.pq.size() >= this.k) {
        if (val > this.pq.front().element) {
            this.pq.dequeue()
            this.pq.enqueue(val)
        }
    } else {
        this.pq.enqueue(val)
    }
    return this.pq.front().element
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */