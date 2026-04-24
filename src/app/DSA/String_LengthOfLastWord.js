/**
 * https://leetcode.com/problems/length-of-last-word/description/
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  let count = 0;

  while (n >= 0) {
    if (s[n] !== ' ') {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
};