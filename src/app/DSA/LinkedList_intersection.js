// https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let seenNodes = new Set();
  let currA = headA;

  // Add current nodes to Set.
  while (currA) {
    seenNodes.add(currA);
    currA = currA.next;
  }

  let currB = headB;
  while (currB) {
    // Return the node if you have seen before.
    if (seenNodes.has(currB)) {
      return currB;
    }
    currB = currB.next;
  }
  return null;
};