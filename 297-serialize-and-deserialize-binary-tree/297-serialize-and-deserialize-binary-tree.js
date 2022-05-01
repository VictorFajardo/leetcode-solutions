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
    if (!root) {
        response.push(null)
        return []
    }
    
    response.push(root.val)
    serialize(root.left, response)
    serialize(root.right, response)
    
    return response
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) return null
    let val = data[0]
    data.shift()
    if (val === null) return null
    
    
    
    let root = new TreeNode(val)
    root.left = deserialize(data)
    root.right = deserialize(data)
    
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */