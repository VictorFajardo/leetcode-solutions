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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if (!root) return null
    
    let successor = null
    
    while (root) {
        if (root.val <= p.val) {
            root = root.right
        } else {
            successor = root
            root = root.left
        }
    }
    
    return successor
    
};

// Depth First Search - Iterative
// time complexity: O(n)
// space complexity: O(n)


/*

    if (!root) return null
    
    if (root.val <= p.val) {
        return inorderSuccessor(root.right, p)
    } else {
        const left = inorderSuccessor(root.left, p)    
        if (left) return left
        else return root
    }
    
    // Depth First Search - Recursive
    // time complexity: O(n)
    // space complexity: O(n)
    
*/