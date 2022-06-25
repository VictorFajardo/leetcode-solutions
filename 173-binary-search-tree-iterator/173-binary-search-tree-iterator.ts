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

class BSTIterator {
    inorder: number[] = [];

    constructor(root: TreeNode | null) {
        this.iterator(root);
    }

    iterator(root: TreeNode): void {
        if (!root) return;
        
        this.iterator(root.right);
        this.inorder.push(root.val);
        this.iterator(root.left);
    }

    next(): number {
        return this.inorder.pop();
    }

    hasNext(): boolean {
        return this.inorder.length > 0
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */