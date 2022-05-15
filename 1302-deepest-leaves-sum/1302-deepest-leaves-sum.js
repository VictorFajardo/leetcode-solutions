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
var deepestLeavesSum = function(root, level = 0, sum = []) {
    if (!root) return root
    
    sum[level] = (sum[level] || 0) + root.val
    deepestLeavesSum(root.left, level + 1, sum)
    deepestLeavesSum(root.right, level + 1, sum)
    
    return sum[sum.length - 1]
    
};

// Deep