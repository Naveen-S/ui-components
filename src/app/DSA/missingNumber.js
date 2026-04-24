/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    sum = sum - nums[i];
  }
  return sum;
};