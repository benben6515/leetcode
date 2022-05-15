/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) return false
  let fast = head.next
  let slow = head

  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      return true
    }
    fast = fast.next.next
    slow = slow.next
  }

  return false
};

// 2022/05/15 done
// Runtime: 82 ms, faster than 75.40% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 44.3 MB, less than 98.48% of JavaScript online submissions for Linked List Cycle.
