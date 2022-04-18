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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) return root
    let response
    
    var helper = function(root) {
        if (!root || k < 1) return
        
        helper(root.left)
        k--
        if (k === 0) {
            response = root.val
        }
        helper(root.right)
    }
    
    helper(root)
    
    return response
};
