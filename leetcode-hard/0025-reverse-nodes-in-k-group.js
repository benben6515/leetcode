/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {

  const reverse = (node1, node2) => {
    let prev = null
    let next = node1
    let cur = node1

    while (cur !== node2) {
      next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }
    return prev
  }

  if (head === null) return head
  let a = b = head

  for (let i = 0; i < k; i++) {
    if (b === null) return head
    b = b.next
  }

  let newHead = reverse(a, b)
  a.next = reverseKGroup(b, k)
  return newHead
};

// 2022/05/08 done.
// Runtime: 124 ms, faster than 26.21% of JavaScript online submissions for Reverse Nodes in k-Group.
// Memory Usage: 44.7 MB, less than 95.27% of JavaScript online submissions for Reverse Nodes in k-Group.
