/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * } 
 */
const sameTrees = (node1, node2) => {
  if (!node1 && !node2) return true;
  else if (!node1 || !node2) return false;
  else if (node1.val !== node2.val) return false;
  
  const isLeftTreeEqual = sameTrees(node1.left, node2.left);
  const isRightTreeEqual = sameTrees(node1.right, node2.right);
  
  return isLeftTreeEqual && isRightTreeEqual;
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (!subRoot) return true; // null is a subtree of any tree
  else if (!root) return false; // subRoot is not null, so it cant be a subtree of null
  else if (sameTrees(root, subRoot)) return true;
  
  const isSubtreeOfLeft = isSubtree(root.left, subRoot);
  const isSubtreeOfRight = isSubtree(root.right, subRoot);
  
  return isSubtreeOfLeft || isSubtreeOfRight;
};