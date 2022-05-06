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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let node = new TreeNode(val)
    if (!root) return node
    
    let current = root
    let prev = root
    
    while (current) {
        prev = current
        if (current.val > val) current = current.left
        else current = current.right
    }
    
    if (prev.val > val) prev.left = node
    else prev.right = node
    
    return root
    
};