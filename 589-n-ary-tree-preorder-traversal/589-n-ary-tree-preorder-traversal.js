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
    const res = []
    
    let stack = []
    stack.push(root)
    
    while (stack.length) {
        let curr = stack.pop()
        res.push(curr.val)
        for (let child of curr.children.reverse()) {
            stack.push(child)
        }
    }
    
    return res
    
};