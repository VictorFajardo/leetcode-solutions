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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    
    let res = []
    
    const traverse = (node, level) => {
        if (level >= res.length) res.push(node.val)
        if (node.right) traverse(node.right, level + 1)
        if (node.left) traverse(node.left, level + 1)
    }
    
    traverse(root, 0)
    
    return res
};

//Breadth First Search