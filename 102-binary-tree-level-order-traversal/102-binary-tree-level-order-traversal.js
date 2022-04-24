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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    
    const levelOrderResponse = []
    
    helper(root, 0, levelOrderResponse)
    
    return levelOrderResponse
    
};

var helper = function(root, level, response) {
    if (!root) return
    
    if (response[level] === undefined) response[level] = []
    response[level].push(root.val)
    
    helper(root.left, level + 1, response)
    helper(root.right, level + 1, response)
    
}

/*
response = [[3], [9. 20], [15, 7]]

*/