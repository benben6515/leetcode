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
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0

  const traverse = (root) => {
    if (!root) return 0

    let leftLength = traverse(root.left)
    let rightLength = traverse(root.right)

    maxDiameter = Math.max(maxDiameter, leftLength + rightLength)

    return 1 + Math.max(leftLength, rightLength)
  }
  traverse(root)

  return maxDiameter
};

// leetcode 0543
