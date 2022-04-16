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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    if (!root) return root
    let sum = 0
    
    var helper = function(root) {
        if (!root) return

        helper (root.right)
        sum += root.val
        root.val = sum
        helper (root.left)
        
        return root
    }
    
    return helper(root)
    
};

// Depth First Search
// time complexity: O(n)
// space complexity: O(1)