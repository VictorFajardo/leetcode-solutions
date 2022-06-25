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
    
    while (queue.size() !== 0) {
        let level = []
        let qLength = queue.size()
        for (let i = 0; i < qLength; i++) {
            let curr = queue.dequeue()
            level.push(curr.val)
            if (curr.left !== null) queue.enqueue(curr.left)
            if (curr.right !== null) queue.enqueue(curr.right)
        }
        result.push(leftToRight ? level : level.reverse())
        leftToRight = !leftToRight
    }
    return result
};

//Breadth First Search