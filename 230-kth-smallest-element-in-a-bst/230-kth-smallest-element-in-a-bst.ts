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
    
    inorder(root, response);
    
    return response[k - 1];

};

function inorder(root: TreeNode | null,response: number[]): void {
    if (!root) return;
    
    inorder(root.left, response);
    response.push(root.val);
    inorder(root.right, response);
};