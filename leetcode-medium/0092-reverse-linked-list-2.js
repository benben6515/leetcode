/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let successor = null

  const reverseN = (head, n) => {
    if (n === 1) {
      successor = head.next
      return head
    }
    const last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor

    return last
  }

  const doReverse = (head, left, right) => {
    if (left === 1) {
      return reverseN(head, right)
    }
    head.next = doReverse(head.next, left - 1, right - 1)
    return head
  }

  return doReverse(head, left, right)
};

// 2022/04/25 done.
// Runtime: 84 ms, faster than 42.15% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 41.9 MB, less than 85.48% of JavaScript online submissions for Reverse Linked List II.
