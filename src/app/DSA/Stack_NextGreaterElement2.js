/* 
https://leetcode.com/problems/next-greater-element-ii/description/

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let arr = [...nums, ...nums];
  let n = arr.length;
  let stack = [];
  let ans = [];

  stack.push(arr[n - 1]);
  ans[n - 1] = -1;

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (arr[i] < top) {
      ans[i] = top;
    } else {
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (arr[i] < top) {
          ans[i] = top;
          break;
        } else {
          stack.pop();
        }
      }
      if (!stack.length) {
        ans[i] = -1;
      }
    }
    stack.push(arr[i]);
  }
  console.log(ans);
  return ans.slice(0, n / 2);
};


// Without replicating the array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {
  // let arr = [...nums, ...nums];
  let n = arr.length;
  let stack = [];
  let ans = [];

  stack.push(arr[n - 1]);
  ans[n - 1] = -1;

  for (let i = (2 * n) - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (arr[i % n] < top) {
      ans[i % n] = top;
    } else {
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (arr[i % n] < top) {
          ans[i % n] = top;
          break;
        } else {
          stack.pop();
        }
      }
      if (!stack.length) {
        ans[i % n] = -1;
      }
    }
    stack.push(arr[i % n]);
  }
  console.log(ans);
  return ans;
};