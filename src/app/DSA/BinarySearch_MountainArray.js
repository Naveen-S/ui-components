// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
/* 
You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

Return the index of the peak element.

Your task is to solve it in O(log(n)) time complexity.

 

Example 1:

Input: arr = [0,1,0]

Output: 1

Example 2:

Input: arr = [0,2,1,0]

Output: 1

Example 3:

Input: arr = [0,10,5,2]

Output: 
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (a) {
  let l = 0;
  let r = a.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    // End condition
    if (l === m) {
      return a[l] >= a[r] ? l : r;
    }
    if (a[m + 1] > a[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
};