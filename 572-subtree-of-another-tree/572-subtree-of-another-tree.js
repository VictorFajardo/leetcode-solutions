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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false
    
    return compare(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    
};

var compare = function(root, subRoot) {
    if (!root && !subRoot) return true
    else if (!root || !subRoot || root.val !== subRoot.val) return false
    
    return compare(root.left, subRoot.left) && compare(root.right, subRoot.right)
}