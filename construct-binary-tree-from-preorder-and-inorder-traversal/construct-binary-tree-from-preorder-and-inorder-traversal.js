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
    let n = preorder.length
    let preorderIndex = 0

    var arrayToTree = function(preorder, left, right) {
        if (left > right) return null
    
        let val = preorder[preorderIndex]
        let root = new TreeNode(val)

        preorderIndex++
        let index = inorder.indexOf(val)

        root.left = arrayToTree(preorder, left, index - 1)
        root.right = arrayToTree(preorder, index + 1, right)

        return root
    }
    
    
    return arrayToTree(preorder, 0, n - 1)
};

// Recursion
// time complexity: O(n)
// space complexity: O(n)