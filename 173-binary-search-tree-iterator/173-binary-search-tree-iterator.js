/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.inOrderQueue = new Queue()
    this.inOrder(root)
};

BSTIterator.prototype.inOrder = function(root) {
    if (!root) return
    this.inOrder(root.left)
    this.inOrderQueue.enqueue(root.val)
    this.inOrder(root.right)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.inOrderQueue.dequeue()
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return !this.inOrderQueue.isEmpty()
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */