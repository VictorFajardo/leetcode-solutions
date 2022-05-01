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
var serialize = function(root) {
    const response = []
    
    var preOrder = function(node) {
        if (!node) {
            response.push(null)
            return
        }

        response.push(node.val)
        preOrder(node.left, response)
        preOrder(node.right, response)
    }
    
    preOrder(root)
    
    return response
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let index = 0
    
    var dePreOrder = function() {
        if (index === data.length) return null
        
        let val = data[index]
        index += 1
        if (val === null) return null

        let root = new TreeNode(val)
        root.left = dePreOrder(data)
        root.right = dePreOrder(data)

        return root
    }
    
    return dePreOrder()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// Deepth First Search - Pre Order traversal
// time complexity: O(n)
// space complexity: O(n)