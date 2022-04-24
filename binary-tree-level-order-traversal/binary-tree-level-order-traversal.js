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
    
    if (level === response.length) response[level] = []
    response[level].push(root.val)
    
    helper(root.left, level + 1, response)
    helper(root.right, level + 1, response)
    
}

// Depth First Search
// time complexity: O(n)
// space complexity: O(n)

/*
var levelOrder = function(root) {
    if (!root) return []
    
    const levelOrderResponse = []
    const queue = new Queue()
    
    queue.enqueue(root)
    
    while (!queue.isEmpty()) {
        let qLength = queue.size()
        const levelNodes = []
        while (qLength > 0) {
            let current = queue.dequeue()
            levelNodes.push(current.val)
            if (current.left) {
                queue.enqueue(current.left)
            }
            if (current.right) {
                queue.enqueue(current.right)
            }
            qLength--
        }
        levelOrderResponse.push(levelNodes)
    }
    
    return levelOrderResponse
    
};
*/

// Breadth First Search
// time complexity: O(n)
// space complexity: O(n)