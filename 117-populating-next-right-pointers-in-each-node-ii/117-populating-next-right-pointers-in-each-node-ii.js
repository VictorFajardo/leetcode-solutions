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
    const q = new Queue()
    q.enqueue(root)
    
    while (!q.isEmpty()) {
        let qSize = q.size()
        let prevNode = null
        while (qSize > 0) {
            let curr = q.dequeue()
            if (curr.left) q.enqueue(curr.left)
            if (curr.right) q.enqueue(curr.right)
            if (prevNode) prevNode.next = curr
            prevNode = curr
            qSize--
        }
    }
    
    return root
};