// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // Create and add sentinel node at the start of the list for deleting even the head if needed.
  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = prev.next.next;
      curr = curr.next;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }
  return sentinel.next;
};