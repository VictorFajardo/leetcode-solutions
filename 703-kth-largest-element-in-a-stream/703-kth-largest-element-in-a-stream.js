class TreeNode {
    constructor(val) {
        this.val = val
        this.count = 1
        this.left = null
        this.right = null
    }
}
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.root = null
    this.k = k
    
    this.insertNode = function(root, val) {
        if (!root) return new TreeNode(val)

        if (root.val < val) root.right = this.insertNode(root.right, val)
        else root.left = this.insertNode(root.left, val)
        
        root.count += 1
        
        return root
    }
    
    this.searchNode = function(root, k) {
        const m = root.right ? root.right.count : 0
        
        if (k === m + 1) return root.val
        
        if (k <= m) return this.searchNode(root.right, k)
        else {
            return this.searchNode(root.left, k - m - 1)
        }
    }
    
    nums.forEach((val) => {
        this.root = this.insertNode(this.root, val)
    })
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.root = this.insertNode(this.root, val)
    return this.searchNode(this.root, this.k)
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */