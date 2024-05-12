// Definition for singly-linked list.
class ListNode {
  conststruct(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  const last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}

// 2022/04/24 done.
// Runtime: 85 ms, faster than 50.05% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.4 MB, less than 33.91% of JavaScript online submissions for Reverse Linked List.

// === Other solutions ===
var reverseList = function(head) {
  let current = head
  let lastNode = null
  while (current) {
    const node = new ListNode(current.val)
    node.next = lastNode
    lastNode = node
    current = current.next
  }
  return lastNode
}
// 2024/05/12 done.
// Runtime: 69 ms Beats 9.01% of users with JavaScript
// Memory: 52.16 MB Beats 21.34% of users with JavaScript
