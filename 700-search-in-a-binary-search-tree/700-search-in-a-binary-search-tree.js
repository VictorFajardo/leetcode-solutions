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
var searchBST = function(root, val) {
    while (root && root.val !== val) {
        root = root.val > val ? root.left : root.right
    }
    
    return root
};

// Iteration
// time complexity: O(log(n))
// space complexity: O(1)

/*
var searchBST = function(root, val) {
    if (!root || root.val === val) return root
    
    return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val)    
};

// Recursion
// time complexity: O(log(n))
// space complexity: O(1)
*/

