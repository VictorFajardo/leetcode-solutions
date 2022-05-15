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
var deepestLeavesSum = function(root) {
    if (!root) return root
    
    var deepest = function(root) {
        if (!root) return 0
        
        return Math.max(deepest(root.left), deepest(root.right)) + 1
    }
    
    var deepestLeaves = function(root, target, deep = 1) {
        if (!root) return 0
        
        if (deep === target) return root.val
        
        return deepestLeaves(root.left, target, deep + 1) + deepestLeaves(root.right, target, deep + 1)
    }
    
    let deepestTarget = deepest(root)
    return deepestLeaves(root, deepestTarget)
    
};