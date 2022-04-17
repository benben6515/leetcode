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
var minDepth = function(root) {
  if (!root) return 0
  let depth = 1
  let queue = []

  queue.push(root)
  while (queue.length !== 0) {
    const { length } = queue
    for (let i = 0; i < length; i++) {
      let current = queue.shift()
      if (current.left === null && current.right === null) return depth
      if (current.left !== null) queue.push(current.left)
      if (current.right !== null) queue.push(current.right)
    }
    depth++
  }
  return depth
};

// 2022/04/17 done.
// Runtime: 226 ms, faster than 93.56% of JavaScript online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 82.1 MB, less than 99.07% of JavaScript online submissions for Minimum Depth of Binary Tree.
