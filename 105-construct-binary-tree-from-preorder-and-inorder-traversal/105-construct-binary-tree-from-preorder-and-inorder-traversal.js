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
    let preorderIndex = 0

    var arrayToTree = function(preorder, inorder) {
        if (!inorder.length) return null
    
        let val = preorder[preorderIndex]
        let root = new TreeNode(val)

        preorderIndex++
        let index = inorder.indexOf(val)
        // console.log(preorder)

        root.left = arrayToTree(preorder, inorder.slice(0, index))
        root.right = arrayToTree(preorder, inorder.slice(index + 1))

        return root
    }
    
    
    return arrayToTree(preorder, inorder)
};