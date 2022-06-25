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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return helper(nums, 0, nums.length - 1);
};

function helper(nums: number[], start: number, end: number): TreeNode | null {
    if (start <= end) {
        const mid: number = start + Math.floor((end - start) / 2);

        const root: TreeNode = new TreeNode(
            nums[mid],
            helper(nums, start, mid - 1),
            helper(nums, mid + 1, end)
        );

        return root    
    } 
    
    return null
}