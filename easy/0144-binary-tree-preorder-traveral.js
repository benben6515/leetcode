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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const queue = []

  const traverse = (root) => {
    if (root === null) return
    queue.push(root.val)

    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  return queue
};

// 2022/04/17 done.
// Runtime: 74 ms, faster than 57.61% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 41.7 MB, less than 96.10% of JavaScript online submissions for Binary Tree Preorder Traversal.
