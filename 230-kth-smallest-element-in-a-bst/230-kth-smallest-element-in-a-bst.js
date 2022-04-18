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
    const res = []
    
    const BST = (root) => {
        if (root.left) BST(root.left)
        res.push(root.val)
        if (root.right) BST(root.right)
    }
    
    BST(root)
    
    return res[k - 1]
    
};