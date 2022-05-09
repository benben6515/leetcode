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

// leetcode 0092