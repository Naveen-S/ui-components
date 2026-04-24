/**
 * https://leetcode.com/problems/largest-odd-number-in-string/
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let n = num.length - 1;
  while (n >= 0) {
    let digit = num[n];
    if (digit % 2 === 1) {
      return num.substring(0, n + 1);
    } else {
      n--;
    }
  }
  return "";
};