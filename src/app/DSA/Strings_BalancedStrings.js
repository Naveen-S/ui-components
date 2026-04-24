/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      temp += 1;
    } else {
      temp -= 1;
    }

    if (temp === 0) {
      count++;
    }
  }
  return count;
};