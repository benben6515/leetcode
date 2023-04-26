// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export function branchSums(root: BinaryTree): number[] {
  // Write your code here.
  const result: number[] = []
  let currentSum = 0
  helper({ root, currentSum, result })
  return result
}

function helper({ root, currentSum, result }: { root: BinaryTree; currentSum: number; result: number[] }) {
  currentSum += root.value
  if (!root.left && !root.right) {
    result.push(currentSum)
  }
  if (root.left) helper({ root: root.left, currentSum, result })
  if (root.right) helper({ root: root.right, currentSum, result })
}

// 2023-04-26 Done.
