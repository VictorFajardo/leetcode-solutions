/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    const stack = []
    const response = []
    stack.push(root)
    
    while (stack.length) {
        const current = stack.pop()
        response.push(current.val)
        for (let child of current.children.reverse()) {
            stack.push(child)
        }
    }
    
    return response
    
};