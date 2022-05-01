/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // console.log(inorder)
    if (!inorder.length) return null
    
    let val = preorder[0]
    let root = new TreeNode(val)
    
    preorder.shift()
    let index = inorder.indexOf(val)
    // console.log(preorder)
    
    root.left = buildTree(preorder, inorder.slice(0, index))
    root.right = buildTree(preorder, inorder.slice(index + 1))
    
    return root
    
};