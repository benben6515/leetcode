/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  /**
   * solution 01
   */

  // let left = head
  // let counter = 0
  //
  // const traverse = (right) => {
  //   if (right === null) return true
  //   let res = traverse(right.next)
  //
  //   res = res && (left.val === right.val)
  //   left = left.next
  //   return res
  // }
  //
  // return traverse(head)

  /**
   * solution 02
   */

  const reverse = (head) => {
    let cur = head
    let prev = null
    let next = null
    while (cur !== null) {
      next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }
    return prev
  }

  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  if (fast !== null) slow = slow.next

  let left = head
  let right = reverse(slow)

  while (right !== null) {
    if (left.val !== right.val) return false
    left = left.next
    right = right.next
  }
  return true
};

// 2022/05/08 done.
// Runtime: 203 ms, faster than 50.96% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 68.7 MB, less than 89.18% of JavaScript online submissions for Palindrome Linked List.
