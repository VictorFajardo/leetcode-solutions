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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let preorderIndex: number = 0;
    
    function helper(left, right): TreeNode | null {
        if (left <= right) {
            const val: number = preorder[preorderIndex];
            const index: number = inorder.indexOf(val);
            preorderIndex += 1;
            
            const root: TreeNode = new TreeNode(
                val,
                helper(left, index - 1),
                helper(index + 1, right)
            );

            return root    
        }

        return null;
    };
    
    return helper(0, preorder.length - 1)
};

