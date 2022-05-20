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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (root === null || subRoot === null) return false

  const isSameTree = (n1, n2) => {
    if (n1 === null && n2 === null) return true
    if (n1 === null || n2 === null) return false
    if (n1.val !== n2.val) return false
    return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right)
  }

  const traverseRoot = (root, subRoot) => {
    if (root === null) return subRoot === null
    if (isSameTree(root, subRoot)) return true
    return traverseRoot(root.left, subRoot) || traverseRoot(root.right, subRoot)
  }

  return traverseRoot(root, subRoot)
};

// 2022/05/21 done
// Runtime: 74 ms, faster than 98.49% of JavaScript online submissions for Subtree of Another Tree.
// Memory Usage: 49.6 MB, less than 18.31% of JavaScript online submissions for Subtree of Another Tree.
