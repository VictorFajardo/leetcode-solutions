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
    let ans = null
    let pVal = p.val
    let qVal = q.val
    
    var helper = function(root) {
        if (!root) return false

        let left = helper(root.left, p, q) ? 1 : 0
        let right = helper(root.right, p, q) ? 1 : 0
        let mid = (root.val === pVal || root.val === qVal) ? 1 : 0
        
        if (left + mid + right >= 2) ans = root
            
        return (left + mid + right > 0)
    }
    
    helper(root)
    return ans
};

