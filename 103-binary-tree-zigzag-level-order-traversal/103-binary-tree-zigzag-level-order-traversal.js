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
var zigzagLevelOrder = function(root) {
    let result = []
    if (!root) return result
    
    let queue = new Queue()
    queue.enqueue(root)
    let leftToRight = true
    
    while (!queue.isEmpty()) {
        let level = []
        let qLength = queue.size()
        while (qLength > 0) {
            let curr = queue.dequeue()
            level.push(curr.val)
            if (curr.left) queue.enqueue(curr.left)
            if (curr.right) queue.enqueue(curr.right)
            qLength--
        }
        result.push(leftToRight ? level : level.reverse())
        leftToRight = !leftToRight
    }
    return result
};

// Breadth First Search
// time complexity: O(n)
// space complexity: O(n)