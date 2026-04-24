/* 
https://leetcode.com/problems/daily-temperatures/description/

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
  let n = arr.length;
  let stack = [];
  let ans = Array(n).fill(0);

  // last element next greater temp is always be 0.
  ans[n - 1] = 0;
  stack.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (arr[i] < arr[top]) {
      ans[i] = top - i;
    } else {
      while (stack.length > 0) {
        let top = stack[stack.length - 1];
        if (arr[i] < arr[top]) {
          ans[i] = top - i;
          break;
        } else {
          stack.pop();
        }
      }
      if (stack.length == 0) {
        ans[i] = 0;
      }
    }
    stack.push(i);
  }
  return ans;
};