/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
};

// 2022/04/24 done.
// Runtime: 85 ms, faster than 50.05% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.4 MB, less than 33.91% of JavaScript online submissions for Reverse Linked List.
