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

function kthSmallest(root: TreeNode | null, k: number): number {
    const response: number[] = [];
    
    breathFirstSearch(root, k, response);
    
    return response[k - 1];

};

function breathFirstSearch(root: TreeNode | null, k: number, response: number[]): void {
    if (!root || response.length >= k) return;
    
    breathFirstSearch(root.left, k, response);
    response.push(root.val);
    breathFirstSearch(root.right, k, response);
};