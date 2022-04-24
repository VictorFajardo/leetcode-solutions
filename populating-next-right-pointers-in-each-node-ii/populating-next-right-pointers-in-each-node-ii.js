/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root
    const queue = new Queue()
    queue.enqueue(root)
    
    while (!queue.isEmpty()) {
        let qLength = queue.size()
        let mostLeft = null
        while (qLength > 0) {
            let current = queue.dequeue()
            if (mostLeft) mostLeft.next = current
            mostLeft = current
            if (current.left) queue.enqueue(current.left)
            if (current.right) queue.enqueue(current.right)
            qLength--
        }
    }
    
    return root
    
};

// Breadth First Search
// time complexity: O(n)
// space complexity: O(n)