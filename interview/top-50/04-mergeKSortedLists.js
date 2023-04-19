/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2
    let listNode = new ListNode
    let cur = listNode
    while(l1 && l2) {
      if(l1.val > l2.val) {
        cur.next = l2
        l2 = l2.next
      } else {
        cur.next = l1
        l1 = l1.next
      }
      cur = cur.next
    }
    cur.next = l1 || l2
    return listNode.next
  }

  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = mergeTwoLists(root, lists[i]);
  }

  return root || null;
};

// leetcode 0023
