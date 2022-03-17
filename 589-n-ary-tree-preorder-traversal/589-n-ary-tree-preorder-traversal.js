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
        let n = curr.children.length - 1
        for (let i = n;  i >= 0; i--) {
            stack.push(curr.children[i])
        }
    }
    
    return res
    
};

// Stack
// time complexity: O(n)
// space complexity: O(n)