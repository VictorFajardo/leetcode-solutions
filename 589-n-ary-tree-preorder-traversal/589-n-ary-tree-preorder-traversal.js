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
    
    let q = []
    q.push(root)
    
    while (q.length) {
        let curr = q.shift()
        let temp = []
        res.push(curr.val)
        for (let child of curr.children) {
            temp.push(child)
        }
        q = [...temp, ...q]
    }
    
    return res
    
};