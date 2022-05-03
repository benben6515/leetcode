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
var invertTree = function(root) {
  if (root === null) return root

  const temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)
  return root
}

// 2022-05-03
// Runtime: 86 ms, faster than 36.05% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 42.2 MB, less than 75.45% of JavaScript online submissions for Invert Binary Tree.
