/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) return null
  if (p.val > q.val) return lowestCommonAncestor(root, q, p)

  if (root.val >= p.val && root.val <= q.val) return root
  return root.val > q.val
    ? lowestCommonAncestor(root.left, p, q)
    : lowestCommonAncestor(root.right, p, q)
};

// 2022/05/24 done
// Runtime: 90 ms, faster than 81.69% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 51.9 MB, less than 82.44% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
