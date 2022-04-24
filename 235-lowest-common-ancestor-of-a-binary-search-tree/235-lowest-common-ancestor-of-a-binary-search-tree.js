/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let rVal = root.val
    let pVal = p.val
    let qVal = q.val
    
    if (rVal > pVal && rVal > qVal) return lowestCommonAncestor(root.left, p, q)
    else if (rVal < pVal && rVal < qVal) return lowestCommonAncestor(root.right, p, q)
    else return root
    
};

// Depth First Search
// time complexity: O(n)
// space complexity: O(n)