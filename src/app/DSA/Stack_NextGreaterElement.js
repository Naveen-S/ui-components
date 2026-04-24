/* 
https://leetcode.com/problems/next-greater-element-i/

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

num1 = [4, 1, 2] num2 = [1, 3, 4, 2]

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

  let stack = [];
  let n = nums2.length;
  let ngeMap = {};
  // Last element NGE is always -1
  ngeMap[nums2[n - 1]] = -1;
  // Push the last element to stack since it can be NGE for other elememts.
  stack.push(nums2[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (nums2[i] < top) {
      ngeMap[nums2[i]] = top;
    } else {
      while (stack.length > 0) {
        let top = stack[stack.length - 1];
        if (nums2[i] < top) {
          ngeMap[nums2[i]] = top;
          break;
        } else {
          stack.pop();
        }
      }
      if (stack.length == 0) {
        ngeMap[nums2[i]] = -1;
      }
    }
    stack.push(nums2[i]);
  }

  console.log(ngeMap);
  return nums1.map(x => ngeMap[x]);

};