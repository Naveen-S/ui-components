// https://leetcode.com/problems/reverse-string-ii/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split('');
  // Jump at 2k pace.
  for (let i = 0; i < s.length; i = i + (2 * k)) {
    let n = k;
    let mid = Math.floor(n / 2);

    // Normal reverse
    for (let j = 0; j < mid; j++) {
      // + i to indicate 2k jumps. 
      let temp = s[i + j];
      s[i + j] = s[i + n - 1 - j];
      s[i + n - 1 - j] = temp;
    }
  }
  return s.join('');
};