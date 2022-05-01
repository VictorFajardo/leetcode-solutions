/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root, response = []) {
    if (!root) return response
    
    if (root.left) serialize(root.left, response)
    if (root.right) serialize(root.right, response)
    response.push(root.val)
    return response
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data, min = -Infinity, max = Infinity) {
    if (!data.length) return null
    let val = data[data.length - 1]
    if (val < min || val > max) return null
    
    data.pop()
    let root = new TreeNode(val)
    root.right = deserialize(data, val, max)
    root.left = deserialize(data, min, val)    
    
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */