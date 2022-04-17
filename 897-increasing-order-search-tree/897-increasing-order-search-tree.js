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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const list = []
    
    inOrder(root, list)
    
    let newRoot = new TreeNode()
    let curr = newRoot
    
    list.map((val) => {
        curr.right = new TreeNode(val)
        curr = curr.right        
    })
    
    return newRoot.right
};

var inOrder = function(root, list) {
    if (!root) return
    
    inOrder(root.left, list)
    list.push(root.val)
    inOrder(root.right, list)
}

// Depth First Search
// time complexity: O(n)
// space complexity: O(n)