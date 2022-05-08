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
var balanceBST = function(root) {
    const inOrderValues = []
    
    var inOrder = function(root) {
        if (!root) return
        
        inOrder(root.left)
        inOrderValues.push(root.val)
        inOrder(root.right)
    }
    
    inOrder(root)
    
    var sortedArrayToBST = function(nums, left, right) {
        if (left > right) return null

        let mid = left + Math.floor((right - left) / 2)

        let root = new TreeNode(nums[mid])
        root.left = sortedArrayToBST(nums, left, mid - 1)
        root.right = sortedArrayToBST(nums, mid + 1, right)

        return root
    
    }
    
    return sortedArrayToBST(inOrderValues, 0, inOrderValues.length - 1)
    
    // console.log(inOrderNodes)
    
};