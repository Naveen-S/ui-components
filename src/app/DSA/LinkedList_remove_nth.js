// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/1814919784/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // find length
  let curr = head;
  let len = 0;
  while (curr) {
    curr = curr.next;
    len++;
  }

  // Find pos (node before item to be deleted)
  let pos = len - n;

  // Add sentinel node
  let sentinel = new ListNode();
  sentinel.next = head;

  let cur = sentinel;
  // Go to that pos
  for (let i = 0; i < pos; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;

  return sentinel.next;
};


// In just one pass
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let slow = fast = sentinel;

  // Move fast pointer n steps
  for (i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Move both slow and fast pointer until fast reaches last node
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return sentinel.next;
};