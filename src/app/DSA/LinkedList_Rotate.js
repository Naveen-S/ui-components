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
var rotateRight = function (head, k) {
  let len = 0;
  let curr = head;
  // Find len
  while (curr) {
    ++len;
    curr = curr.next;
  }

  // k can be greater than len. 
  k = k % len;

  let pos = head;
  // Go to pos k-1
  for (let i = 0; i < len - k - 1; i++) {
    pos = pos.next;
  }

  let rhead = pos.next;
  pos.next = null;
  let cur = rhead;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = head;

  return rhead;
};