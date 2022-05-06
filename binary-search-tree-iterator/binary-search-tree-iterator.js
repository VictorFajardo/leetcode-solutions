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
    this.inOrderList = []
    this.inOrder(root)
    this.index = 0
};

BSTIterator.prototype.inOrder = function(root) {
    if (!root) return
    this.inOrder(root.left)
    this.inOrderList.push(root.val)
    this.inOrder(root.right)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let response = this.inOrderList[this.index]
    this.index += 1
    return response
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index < this.inOrderList.length
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */