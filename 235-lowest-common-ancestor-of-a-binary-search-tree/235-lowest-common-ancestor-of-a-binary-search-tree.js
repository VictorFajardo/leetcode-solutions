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
    if (!root) return null
    
    while (root) {
        if (root.val > q.val && root.val > p.val) {
            root = root.left
        } else if (root.val < q.val && root.val < p.val) {
            root = root.right   
        } else {
            return root
        }
    }
    
    return root
    
};

// Recursion
// time complexity: O(n)
// space complexity: O(n)

/*
    if (!root) return null
    
    if (root.val > q.val && root.val > p.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (root.val < q.val && root.val < p.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root
    }
*/