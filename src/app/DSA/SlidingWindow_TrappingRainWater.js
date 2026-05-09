// https://leetcode.com/problems/trapping-rain-water/description/
/* 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (arr) {
  let n = arr.length;
  let maxL = [];
  maxL[0] = arr[0];
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(arr[i], maxL[i - 1]);
  }

  let maxR = [];
  maxR[n - 1] = arr[n - 1];
  for (let i = n - 2; i > 0; i--) {
    maxR[i] = Math.max(arr[i], maxR[i + 1]);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
    ans += ans + waterTrapped > 0 ? waterTrapped : 0;
  }

  return ans;
};