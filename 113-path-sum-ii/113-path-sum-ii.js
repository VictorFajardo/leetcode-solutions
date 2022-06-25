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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) return []
    
    const path = []
    const response = []
    
    helper(root, targetSum, path, response)
    
    return response    
};

var helper = function(root, targetSum, path, response) {
    if (!root) return
    
    path.push(root.val)
    
    if (targetSum === root.val && !root.left && !root.right) response.push([...path])
    else {
        helper(root.left, targetSum - root.val, path, response)
        helper(root.right, targetSum - root.val, path, response)    
    }
    
    path.pop()
      
};


// Depth-First Search
// time complexity: O(n)
// space complexity: O(n)