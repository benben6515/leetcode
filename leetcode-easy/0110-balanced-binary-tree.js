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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true
  let bool = true

  const traverse = (root) => {
    if (root === null) return 0
    const left = traverse(root.left)
    const right = traverse(root.right)

    if (Math.abs(left - right) > 1) bool = false

    return 1 + Math.max(left, right)
  }
  traverse(root)
  return bool
};

// 2022/05/17 done
// Runtime: 110 ms, faster than 36.92% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 47.1 MB, less than 71.76% of JavaScript online submissions for Balanced Binary Tree.
