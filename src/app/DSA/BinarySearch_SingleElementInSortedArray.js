// https://leetcode.com/problems/single-element-in-a-sorted-array/description/
/* 
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (a) {
  let l = 0;
  let r = a.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    // End case
    if (a[m] != a[m - 1] && a[m] != a[m + 1]) {
      return a[m];
    }
    // If m & m-1 are equal
    if (a[m] === a[m - 1]) {
      // Odd numbers on left
      if ((m - 2 - l + 1) % 2 === 1) {
        r = m - 2;
      } else {
        l = m + 1;
      }
    }
    // m and m+1 are equal
    else {
      // Odd numbers on right
      if ((r - (m + 2) + 1) % 2 === 1) {
        l = m + 2;
      } else {
        r = m - 1;
      }
    }
  }

};