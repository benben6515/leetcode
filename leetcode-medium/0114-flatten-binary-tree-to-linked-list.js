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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) return

  flatten(root.left)
  flatten(root.right)

  let left = root.left
  let right = root.right

  root.left = null
  root.right = left

  let p = root
  while (p.right !== null) {
    p = p.right
  }
  p.right = right
};

// 2022/05/08 done.
// Runtime: 80 ms, faster than 72.83% of JavaScript online submissions for Flatten Binary Tree to Linked List.
// Memory Usage: 44.5 MB, less than 63.81% of JavaScript online submissions for Flatten Binary Tree to Linked List.
