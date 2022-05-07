/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


var getSuccessor = function(root) {
    root = root.right
    while (root.left != null) root = root.left
    return root.val
}

var getPredecessor = function(root) {
    root = root.left
    while (root.rigth != null) root = root.right
    return root.val
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root == null) return null
    
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        if (root.left == null && root.right == null) {
            root = null
        } else if (root.left == null || root.right == null) {
            root = root.left || root.right
        } else if (root.right != null) {
            root.val = getSuccessor(root)
            root.right = deleteNode(root.right, root.val)
        } else {
            root.val = getPredecessor(root)
            root.left = deleteNode(root.left, root.val)
        }
    }
    
    return root
};