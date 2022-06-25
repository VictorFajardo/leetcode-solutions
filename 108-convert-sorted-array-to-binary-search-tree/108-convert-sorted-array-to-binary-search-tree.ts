/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[], start: number = 0, end: number = nums.length - 1): TreeNode | null {
    if (start <= end) {
        const mid: number = start + Math.floor((end - start) / 2);

        const root: TreeNode = new TreeNode(
            nums[mid],
            sortedArrayToBST(nums, start, mid - 1),
            sortedArrayToBST(nums, mid + 1, end)
        );

        return root    
    } 
    
    return null

};