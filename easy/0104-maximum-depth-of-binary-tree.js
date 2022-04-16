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
 * @return {number}
 */
var maxDepth = function(root) {
  let maxDepth = 0
  let depth = 0

  var travel = (root) => {
    if (root === null) return
    depth++
    if (maxDepth < depth) maxDepth = depth
    travel(root.left)
    travel(root.right)
    depth--
  }
  travel(root)

  return maxDepth
};

// 2022/04/16 done.
// Runtime: 72 ms, faster than 85.06% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 45.2 MB, less than 54.76% of JavaScript online submissions for Maximum Depth of Binary Tree.
