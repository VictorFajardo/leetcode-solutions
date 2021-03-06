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
    if (!root) return new TreeNode(val)
    
    if (root.val > val) root.left = insertIntoBST(root.left, val)
    else root.right = insertIntoBST(root.right, val)
    
    return root
};

// Depth-First Search - Iteration
// time complexity: O(h)
// space complexity: O(1)

// Depth-First Search - Recursive
// time complexity: O(h)
// space complexity: O(1)

/*
    let current = root
    let node = new TreeNode(val)
    
    while (current) {
        if (current.val > val) {
            if (current.left) current = current.left
            else {
                current.left = node
                return root
            }
        }
        else {
            if (current.right) current = current.right
            else {
                current.right = node
                return root
            }
        }
    }
    
    return node
*/