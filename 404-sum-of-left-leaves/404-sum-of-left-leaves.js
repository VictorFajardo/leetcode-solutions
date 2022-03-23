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
 * @return {number}
 */
var sumOfLeftLeaves = function(root, left = false) {
    if (!root.left && !root.right) {
        if (left) return root.val
        return 0
    } 
    
    let leftLeaves = root.left ? sumOfLeftLeaves(root.left, true) : 0
    let rightLeaves = root.right ? sumOfLeftLeaves(root.right, false) : 0
    
    return leftLeaves + rightLeaves
    
};